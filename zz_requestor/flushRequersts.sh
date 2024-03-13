#!/bin/bash

# The number of times the loop will run
n=$1

# Loop that runs n times
for (( i=1; i<=n; i++ ))
do
   echo "Iteration number: $i"
   yarn test ./test/proofRequestor/99_submitAsk_TransferVerifier.ts
done