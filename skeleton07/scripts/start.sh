#!/usr/bin/env bash

#******************************************************************************
# Copyright 2019 the original author or authors.                              *
#                                                                             *
# Licensed under the Apache License, Version 2.0 (the "License");             *
# you may not use this file except in compliance with the License.            *
# You may obtain a copy of the License at                                     *
#                                                                             *
# http://www.apache.org/licenses/LICENSE-2.0                                  *
#                                                                             *
# Unless required by applicable law or agreed to in writing, software         *
# distributed under the License is distributed on an "AS IS" BASIS,           *
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.    *
# See the License for the specific language governing permissions and         *
# limitations under the License.                                              *
#******************************************************************************/

#==============================================================================
# SCRIPT:   start
# AUTOHR:   Markus Schneider
# DATE:     2019-06-01
# REV:      1.0.0
# PLATFORM: Noarch
# PURPOSE:  Wrapper script for starting a docker container
#==============================================================================

##----------------------------------------
## CONFIG
##----------------------------------------
CWD=$(pwd)
HOSTNAME="lx1"

##----------------------------------------
## SUB FUNCTION(S)
##----------------------------------------
start() {
   docker run -h $HOSTNAME -dit -p 3001:3001 -e GITHUB_CLIENT_ID="$GITHUB_CLIENT_ID" -e GITHUB_CLIENT_SECRET="$GITHUB_CLIENT_SECRET" -e GITHUB_CALLBACK_URL="$GITHUB_CALLBACK_URL" --name $NAME $IMAGE
}

##----------------------------------------
## MAIN
##----------------------------------------
main() {
   start "$@"
}

start "$@"
