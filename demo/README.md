## To Run stats testing:

To create stats this repo uses existing Faber & Alice Demo. Faber issues `num_credentials` credentials to Alice. Whether the VC is JSON-LD BBS+ or AnonCreds (aka Indy) depends on commands used to run their Dockers.

About code-
Main code changes are in folder `demo/runners/`. Logs are using variables defined in `stats_time.py`. `data_size` is defined in `faber.py`. 

Steps-
1. cd into `demo` folder
2. Run 2 terminals in demo folder, one for Faber other for Alice
3. To run Faber docker (either one of a. or b.) -
   
	a. for BBS+ use (Ledger URL is just required, not actually used as not needed for bbs+)
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
7. Data is logged in as 6 files _inside_ dockers. For issuance Faber has 1. `time_faber-send-offer.txt` and 2. `time_faber-issue.txt`, Alice has 3. `time_alice-send-request.txt`, for verification Faber has 4. `time_faber-verify-pres.txt` and 5. `time_faber-requ-proof.txt`, Alice has 6. `time_alice-send-pres.txt`. 
8. Run `copy_stats.sh` to copy all 6 files outiside dockers (after `chmod +x copy_stats.sh`)
```
./copy_stats.sh
```
