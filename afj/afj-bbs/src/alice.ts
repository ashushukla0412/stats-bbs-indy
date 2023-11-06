import { ConnectionEventTypes, ConnectionStateChangedEvent, CredentialEventTypes, CredentialState, CredentialStateChangedEvent, DidExchangeState, LogLevel } from "@aries-framework/core"
import { BaseAgent } from "./base"
import { num_creds, timing_alice, timings } from "./stats-time";
import { appendFileSync, unlinkSync } from 'fs'

(
    async () => {
        await new Promise(f => setTimeout(f, 5000));
        const alice = new BaseAgent('alice', 11002, LogLevel.debug)
        const logger = alice.agent.config.logger
        await alice.agent.initialize()

        const oob = await alice.receiveConnectionInvitation()
        const { payload: { connectionRecord: connection } } = await alice.wait<ConnectionStateChangedEvent>(
            ConnectionEventTypes.ConnectionStateChanged,
            [
                (e) => e.payload.connectionRecord.id == oob.connectionRecord.id,
                (e) => e.payload.connectionRecord.state == DidExchangeState.Completed
            ]
        )
        logger.info('connection established ', connection)

        try {
            unlinkSync('.stats/time_request.txt');
          } catch (error) {
            // nothing
          }

        for (let i = 0; i < num_creds; i++) {
            const { payload: { credentialRecord: faberConnectionRecord } } = await alice.wait<CredentialStateChangedEvent>(
                CredentialEventTypes.CredentialStateChanged,
                [
                    (e) => e.payload.credentialRecord.state != CredentialState.Done
                ]
            )
            console.log('aaaaabbb', faberConnectionRecord);
            // const credExchangeRecord = (await alice.agent.credentials.findAllByQuery({ connectionId: faberConnectionRecord.connectionId })).at(i);
            // console.log('aaaa', credExchangeRecord);

            timing_alice.request_start = performance.now();
            const offer_recv = await alice.agent.credentials.acceptOffer({ credentialRecordId: faberConnectionRecord.id });
            console.log('bbbb', offer_recv);
            timing_alice.request_done = performance.now();
            timings.time_request = timing_alice.request_done - timing_alice.request_start;

            const { payload: { credentialRecord: faberConnectionRecord2 } } = await alice.wait<CredentialStateChangedEvent>(
                CredentialEventTypes.CredentialStateChanged,
                [
                    (e) => e.payload.credentialRecord.state == CredentialState.CredentialReceived,
                ]
            );
            console.log('cccc', faberConnectionRecord2)
            const cred_recv = await alice.agent.credentials.acceptCredential({ credentialRecordId: faberConnectionRecord2.id });
            console.log('dddd', cred_recv);
            appendFileSync('.stats/time_request.txt', timings.time_request.toString() + '\n');
        }
    }
)()