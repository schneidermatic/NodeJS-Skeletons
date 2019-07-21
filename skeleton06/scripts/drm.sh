#!/bin/bash

DOCKER_IMAGES=("skeleton06_webapp" "node" "mongo")

source ./envrc

docker-compose down -v

for DOCKER_IMAGE in ${DOCKER_IMAGES[@]}; do
   docker rmi -f $(docker images $DOCKER_IMAGE -q)
done