import type { Alice } from './Alice'
import type { AliceInquirer } from './AliceInquirer'
import type { Faber } from './Faber'
import type { FaberInquirer } from './FaberInquirer'
import type {
  Agent,
  BasicMessageStateChangedEvent,
  CredentialExchangeRecord,
  CredentialStateChangedEvent,
  ProofExchangeRecord,
  ProofStateChangedEvent,
} from '@aries-framework/core'
import type BottomBar from 'inquirer/lib/ui/bottom-bar'
import { appendFileSync, unlinkSync } from 'fs'

import {
  BasicMessageEventTypes,
  BasicMessageRole,
  CredentialEventTypes,
  CredentialState,
  ProofEventTypes,
  ProofState,
} from '@aries-framework/core'
import { ui } from 'inquirer'

import { Color, purpleText } from './OutputClass'
import { curr_cred_state, timing_alice, timing_faber, timings } from './stats-time'

export class Listener {
  public on: boolean
  private ui: BottomBar

  public constructor() {
    this.on = false
    this.ui = new ui.BottomBar()
  }

  private turnListenerOn() {
    this.on = true
  }

  private turnListenerOff() {
    this.on = false
  }

  private printCredentialAttributes(credentialRecord: CredentialExchangeRecord) {
    if (credentialRecord.credentialAttributes) {
      const attribute = credentialRecord.credentialAttributes
      console.log('\n\nCredential preview:')
      attribute.forEach((element) => {
        console.log(purpleText(`${element.name} ${Color.Reset}${element.value}`))
      })
    }
  }

  public aliceCredentialListener(alice: Alice, aliceInquirer: AliceInquirer) {
    alice.agent.events.on(
      CredentialEventTypes.CredentialStateChanged,
      async ({ payload }: CredentialStateChangedEvent) => {
        if (payload.credentialRecord.state === CredentialState.OfferReceived) {
          this.printCredentialAttributes(payload.credentialRecord)

          timing_alice.request_start = performance.now();
          await aliceInquirer.alice.agent.credentials.acceptOffer({
            credentialRecordId: payload.credentialRecord.id,
          })
          timing_alice.request_done = performance.now();
          timings.time_request =  timing_alice.request_done - timing_alice.request_start;

        } else if (payload.credentialRecord.state === CredentialState.CredentialReceived) {
          this.printCredentialAttributes(payload.credentialRecord)
          await aliceInquirer.alice.agent.credentials.acceptCredential({
            credentialRecordId: payload.credentialRecord.id
          })
        }
        else if(payload.credentialRecord.state === CredentialState.Done){
          appendFileSync('.stats/time_request.txt', timings.time_request.toString() + '\n');
        }
      }
    )
  }

  public faberCredentialListener(faber: Faber, faberInquirer: FaberInquirer) {
    faber.agent.events.on(
      CredentialEventTypes.CredentialStateChanged,
      async ({ payload }: CredentialStateChangedEvent) => {
        if (payload.credentialRecord.state === CredentialState.RequestReceived) {
          this.printCredentialAttributes(payload.credentialRecord)

          timing_faber.offer_start = performance.now();
          await faberInquirer.faber.agent.credentials.acceptRequest({
            credentialRecordId: payload.credentialRecord.id
          })
          timing_faber.offer_done = performance.now();
          timings.time_issue = timing_faber.offer_done - timing_faber.offer_start;
        } else if (payload.credentialRecord.state === CredentialState.Done){
          appendFileSync('.stats/time_offer.txt', timings.time_offer.toString() + '\n');
          appendFileSync('.stats/time_issue.txt', timings.time_issue.toString() + '\n'); 
        }
      }
    )
  }

  public credentialDoneListener(faber: Faber, faberInquirer: FaberInquirer) {
    faber.agent.events.on(
      CredentialEventTypes.CredentialStateChanged,
      async ({ payload }: CredentialStateChangedEvent) => {
        if (payload.credentialRecord.state === CredentialState.Done) {
          curr_cred_state.done = true;
          console.log("rrrrrr");
        }
      }
    )
  }

  public messageListener(agent: Agent, name: string) {
    agent.events.on(BasicMessageEventTypes.BasicMessageStateChanged, async (event: BasicMessageStateChangedEvent) => {
      if (event.payload.basicMessageRecord.role === BasicMessageRole.Receiver) {
        this.ui.updateBottomBar(purpleText(`\n${name} received a message: ${event.payload.message.content}\n`))
      }
    })
  }

  private async newProofRequestPrompt(proofRecord: ProofExchangeRecord, aliceInquirer: AliceInquirer) {
    this.turnListenerOn()
    await aliceInquirer.acceptProofRequest(proofRecord)
    this.turnListenerOff()
    await aliceInquirer.processAnswer()
  }

  public proofRequestListener(alice: Alice, aliceInquirer: AliceInquirer) {
    alice.agent.events.on(ProofEventTypes.ProofStateChanged, async ({ payload }: ProofStateChangedEvent) => {
      if (payload.proofRecord.state === ProofState.RequestReceived) {
        await this.newProofRequestPrompt(payload.proofRecord, aliceInquirer)
      }
    })
  }

  public proofAcceptedListener(faber: Faber, faberInquirer: FaberInquirer) {
    faber.agent.events.on(ProofEventTypes.ProofStateChanged, async ({ payload }: ProofStateChangedEvent) => {
      if (payload.proofRecord.state === ProofState.Done) {
        await faberInquirer.processAnswer()
      }
    })
  }

  public async newAcceptedPrompt(title: string, faberInquirer: FaberInquirer) {
    this.turnListenerOn()
    await faberInquirer.exitUseCase(title)
    this.turnListenerOff()
    await faberInquirer.processAnswer()
  }
}
