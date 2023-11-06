import { Agent, AutoAcceptCredential, BaseEvent, ConsoleLogger, CredentialsModule, HandshakeProtocol, HttpOutboundTransport, JsonLdCredentialFormatService, LogLevel, V2CredentialProtocol, W3cCredentialsModule, filterContextCorrelationId } from "@aries-framework/core";
import { HttpInboundTransport, agentDependencies } from "@aries-framework/node";
import {readFileSync, writeFileSync} from 'fs'
import { ReplaySubject, filter, first, firstValueFrom } from 'rxjs'
import {BbsModule} from '@aries-framework/bbs-signatures'
import { defaultDocumentLoader } from "@aries-framework/core/build/modules/vc/data-integrity/libraries/documentLoader";
import { IndySdkModule } from "@aries-framework/indy-sdk";
import indySdk from 'indy-sdk'

export class BaseAgent{
    readonly agent: Agent
    private readonly port: number

    constructor(name: string, port: number, logLevel: LogLevel){
        this.port = port
        this.agent = new Agent({
            config: {
                endpoints: [`http://localhost:${port}`],
                label: name,
                logger: new ConsoleLogger(logLevel),
                walletConfig: {
                    id: name,
                    key: 'pw'
                }
            },
            dependencies: agentDependencies,
            modules: {
                indySdk: new IndySdkModule({
                    indySdk: indySdk
                }),
                credentials: new CredentialsModule({
                    autoAcceptCredentials: AutoAcceptCredential.Never,
                    credentialProtocols: [new V2CredentialProtocol({
                        credentialFormats: [new JsonLdCredentialFormatService()]
                    })]
                }),
                w3cCredentials: new W3cCredentialsModule({
                    documentLoader: defaultDocumentLoader
                }),
                bbs: new BbsModule()
            }
        })
        this.agent.registerOutboundTransport(new HttpOutboundTransport())
        this.agent.registerInboundTransport(new HttpInboundTransport({port: port}))
    }

    createConnectionInvitation = async ()=>{
        const oob = await this.agent.oob.createInvitation({
            autoAcceptConnection: true,
            handshakeProtocols: [HandshakeProtocol.Connections]
        })
        writeFileSync('.invitations/connection', oob.outOfBandInvitation.toUrl({domain: `http://localhost:${this.port}`}))
        return oob
    }

    receiveConnectionInvitation = async ()=>{
        const raw = readFileSync('.invitations/connection').toString('utf-8')
        const oob = await this.agent.oob.receiveInvitationFromUrl(raw)
        return oob
    }

    wait = async <T extends BaseEvent>(
        event: string,
        filters: ((event: T) => boolean)[]
      ) => {
        let observable = this.agent.events.observable<T>(event)
        const subject = new ReplaySubject<T>(1)
      
        observable = observable.pipe(
          filterContextCorrelationId(this.agent.context.contextCorrelationId)
        )
        filters.forEach((f) => {
            observable = observable.pipe(filter(f))
        })
        
        observable = observable.pipe(first())
        observable.subscribe(subject)
      
        return firstValueFrom(subject)
    }
}