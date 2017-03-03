#!/bin/bash

sudo /usr/local/bin/mongod > /dev/null &
node js/app.js
