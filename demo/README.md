## To Run stats testing:

To create stats this repo uses existing Faber & Alice Demo. Faber issues `num_credentials` credentials to Alice. Whether the VC is JSON-LD BBS+ or AnonCreds (aka Indy) depends on commands used to run their Dockers.

Steps-
1. cd into `demo` folder
2. Run 2 terminals in demo folder, one for Faber other for Alice
3. To run Faber docker (either one of a. or b.) -
   
	a. for BBS+ use
	```
	LEDGER_URL=http://dev.greenlight.bcovrin.vonx.io ./run_demo faber --did-exchange --aip 20 --cred-type json-ld
	```
	b. For AnonCreds use
	```
	LEDGER_URL=http://dev.greenlight.bcovrin.vonx.io ./run_demo faber --did-exchange --aip 20
	```
5. For Alice run (for both BBS+ or AnonCreds)
```
LEDGER_URL=http://dev.greenlight.bcovrin.vonx.io ./run_demo alice
```
5. Copy invitation from Faber to Alice terminal.
6. Enter `num_credentials` value when prompted in Faber terminal. Wait for them to exchange all credentials _one-by-one_ and log data (issuance logs are shown in stdout, not timing data).
7. Data is logged in as 3 files _inside_ dockers. Faber has 1. `time_faber-send-offer.txt` and 2. `time_faber-issue.txt`, Alice has 3. `time_alice-send-request.txt`. 
8. To copy them outside docker, can use docker cp such as 
```
docker cp faber:/home/aries/time_faber-issue.txt ./
docker cp alice:/home/aries/time_alice-send-request.txt ./
docker cp faber:/home/aries/time_faber-send-offer.txt ./
```
