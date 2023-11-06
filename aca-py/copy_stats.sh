#!/bin/bash

docker cp faber:/home/aries/time_faber-send-offer.txt ./
docker cp faber:/home/aries/time_faber-issue.txt ./
docker cp alice:/home/aries/time_alice-send-request.txt ./
docker cp faber:/home/aries/time_faber-requ-proof.txt ./
docker cp alice:/home/aries/time_alice-send-pres.txt ./
docker cp faber:/home/aries/time_faber-verify-pres.txt ./