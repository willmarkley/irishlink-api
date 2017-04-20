# Setup

## Download Software

```
# node-v6.9.4-linux-x64
wget https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz
tar -xvJf node-v6.9.4-linux-x64.tar.xz
sudo cp -a node-v6.9.4-linux-x64/{bin,include,lib,share} /usr/local


# mongodb-linux-x86_64-rhel-3.4.3
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.3.tgz
tar -xvzf mongodb-linux-x86_64-rhel70-3.4.3.tgz
sudo cp -a mongodb-linux-x86_64-rhel70-3.4.3/bin /usr/local


# Setup database directory
sudo mkdir -p /data/db  ## default


# nginx web server
sudo yum install nginx


# Clone github
git clone https://github.com/willmarkley/irishlink-api.git
```


## Configure NodeJs

```
# First Time Setup (no Package.json)
	# Setup project
	npm init

	# Install Driver between mongodb and nodejs
	npm install mongodb --save

	# Install express
	npm install express --save

	# Install body-parser
	npm install body-parser --save

# Package.json available
  npm install

# PM2 Node manager
npm install -g pm2
pm2 start irishlink-api/js/app.js
```


## Configure MongoDB

```
# shell access to database
sudo /usr/local/bin/mongo    # after daemon (mongod) is running

# create database
use irishlink

# create collections
db.ideas.insert({"test":"test"})
db.developers.insert({"test":"test"})
```


## Configure Nginx as reverse proxy

```
# Create firewall access rules with cloud provider

# configuration file
sudo mkdir /etc/nginx/sites-available   # if not present
sudo mkdir /etc/nginx/sites-enabled     # if not present
sudo cp irishlink-api/nginx/default /etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default

# fix access errors if they occur
sudo cat /var/log/audit/audit.log | grep nginx | grep denied | audit2allow -M mynginx
sudo semodule -i mynginx.pp
```
