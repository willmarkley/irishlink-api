#!/bin/bash


if [ "$1" = "init" ]; then
    sudo /usr/local/bin/mongod > /dev/null &
    #node js/app.js > console.log &
    pm2 start js/app.js
    sudo service nginx start
elif [ "$1" = "stop" ]; then
    sudo /usr/local/bin/mongod --shutdown
    pm2 delete all
    sudo service nginx stop
else
    sudo /usr/local/bin/mongod > /dev/null &
    pm2 restart all
    sudo service nginx restart
fi

