# irishlink-api


## Setup

```
# node-v6.9.4-linux-x64
wget https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz
tar -xvJf node-v6.9.4-linux-x64.tar.xz
sudo cp -a node-v6.9.4-linux-x64/{bin,include,lib,share} /usr/local


# mongodb-linux-x86_64-amazon-3.4.1
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-amazon-3.4.1.tgz
tar -xvzf mongodb-linux-x86_64-amazon-3.4.1.tgz
sudo cp -a mongodb-linux-x86_64-amazon-3.4.1/bin /usr/local


# Setup database directory
sudo mkdir -p /data/db  ## default

# Create github
# Clone github

# Setup project
npm init


# Install Driver between mongodb and nodejs
npm install mongodb --save

# Install express
npm install express --save
```

