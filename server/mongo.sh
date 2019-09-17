#!/bin/bash
docker run --name mongo -v /home/amiram/Documents/Elections/server/data:/data/db -d -p 27017:27017 mongo
