#!/bin/bash

ACCESS_TOKEN="" # => YOUR ACCESS TOKEN
COOKIE=""       # => SET YOUR COOKIE
ENDPOINT="http://0.0.0.0:3001/api/v1/timestamp"

curl --cookie $COOKIE -H "Authorization: Bearer $ACCESS_TOKEN" $ENDPOINT
echo ""
