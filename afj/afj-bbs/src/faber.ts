import { CREDENTIALS_CONTEXT_V1_URL, ConnectionEventTypes, ConnectionStateChangedEvent, CredentialEventTypes, CredentialExchangeRecord, CredentialStateChangedEvent, DidExchangeState, InjectionSymbols, KeyType, LogLevel, TypedArrayEncoder } from "@aries-framework/core"
import { BaseAgent } from "./base"
import { TimeStats, data_size, num_creds, timing_faber, timings } from "./stats-time"
import { appendFileSync, unlinkSync } from 'fs'


(
  async () => {
    const faber = new BaseAgent('faber', 11001, LogLevel.debug)

    await faber.agent.initialize()

    const oob = await faber.createConnectionInvitation()
    const logger = faber.agent.config.logger
    logger.info('created oob invitation')

    const { payload: { connectionRecord: connection } } = await faber.wait<ConnectionStateChangedEvent>(
      ConnectionEventTypes.ConnectionStateChanged,
      [
        (e) => e.payload.connectionRecord.outOfBandId == oob.id,
        (e) => e.payload.connectionRecord.state == DidExchangeState.Completed
      ]
    )

    {
      try {
        // create bls key on G2 curve
        const key = await faber.agent.wallet.createKey({
          keyType: KeyType.Bls12381g2,
          seed: TypedArrayEncoder.fromString('testseed000000000000000000000001')
        })
      } catch (error) {
        logger.info('key already exists')
      }



      try {
        unlinkSync('.stats/time_offer.txt');
        unlinkSync('.stats/time_issue.txt');
      } catch (error) {
        // nothing
      }

      for (let i = 0; i < num_creds; i++) {
        console.log('here');

        timing_faber.offer_start = performance.now();
        const curr_cred = await faber.agent.credentials.offerCredential({
          connectionId: connection.id,
          credentialFormats: {
            jsonld: {
              credential: {
                "@context": [
                  CREDENTIALS_CONTEXT_V1_URL,
                  "https://w3id.org/citizenship/v1",
                  "https://w3id.org/security/bbs/v1"
                ],
                "type": [
                  "VerifiableCredential",
                  "PermanentResident"
                ],
                "issuer": "did:key:zUC72Q7XD4PE4CrMiDVXuvZng3sBvMmaGgNeTUJuzavH2BS7ThbHL9FhsZM9QYY5fqAQ4MB8M9oudz3tfuaX36Ajr97QRW7LBt6WWmrtESe6Bs5NYzFtLWEmeVtvRYVAgjFcJSa",
                "issuanceDate": "2020-01-01T12:00:00Z",
                "credentialSubject": {
                  "type": [
                    "PermanentResident"
                  ],
                  "givenName": "ALICE " + i.toString(),
                  "familyName": "SMITH",
                  "gender": "Female",
                  "birthCountry": "Bahamas",
                  "birthDate": "1958-07-17",
                  "lprCategory": "a".repeat(data_size),
                }
              },
              options: {
                proofType: 'BbsBlsSignature2020',
                proofPurpose: 'assertionMethod',
              }
            }
          },
          protocolVersion: 'v2'
        } as any)
        timing_faber.offer_done = performance.now();
        timings.time_offer = timing_faber.offer_done - timing_faber.offer_start;

        const { payload: { credentialRecord: aliceConnectionRecord } } = await faber.wait<CredentialStateChangedEvent>(
          CredentialEventTypes.CredentialStateChanged,
          []
        );
        console.log(aliceConnectionRecord);

        timing_faber.issue_start = performance.now();
        const issued_cred = await faber.agent.credentials.acceptRequest({ credentialRecordId: aliceConnectionRecord.id })
        timing_faber.issue_done = performance.now();
        timings.time_issue = timing_faber.issue_done - timing_faber.issue_start

        const { payload: { credentialRecord: aliceConnectionRecord2 } } = await faber.wait<CredentialStateChangedEvent>(
          CredentialEventTypes.CredentialStateChanged,
          []
        );
        console.log('aaaaa', aliceConnectionRecord2);
        appendFileSync('.stats/time_offer.txt', timings.time_offer.toString() + '\n');
        appendFileSync('.stats/time_issue.txt', timings.time_issue.toString() + '\n'); 
      }
      console.log('----ALL DONE----')

    }
  }
)()