#!/bin/bash

docker tag node/montapi:0.2.0 f4s-docker.ruv.de/monitoring/montapi:0.2.0
docker push f4s-docker.ruv.de/monitoring/montapi:0.2.0
