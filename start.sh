#!/bin/bash

sudo /usr/local/bin/mongod > /dev/null &
#node js/app.js > console.log &
pm2 restart all
sudo service nginx restart
