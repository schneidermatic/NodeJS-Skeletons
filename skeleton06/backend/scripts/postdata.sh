#!/bin/bash

TIMESTAMP=$(date +%Y-%m-%dT%H:%M:%S.%3NZ)
ENDPOINT="http://localhost:3000/v1/todos"

JSON_MESSAGE="{"
JSON_MESSAGE="$JSON_MESSAGE \"name\":\"By milk\","
JSON_MESSAGE="$JSON_MESSAGE \"time\":\"$TIMESTAMP\""
JSON_MESSAGE="$JSON_MESSAGE }"

curl -XPOST "${ENDPOINT}" -H 'Content-Type: application/json' -d "$JSON_MESSAGE"