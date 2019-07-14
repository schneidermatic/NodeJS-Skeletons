#!/bin/bash

docker-compose down -v
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker-compose up
