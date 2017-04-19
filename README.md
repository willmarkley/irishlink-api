# irishlink-api


## Setup

```
# node-v6.9.4-linux-x64
wget https://nodejs.org/dist/v6.9.4/node-v6.9.4-linux-x64.tar.xz
tar -xvJf node-v6.9.4-linux-x64.tar.xz
sudo cp -a node-v6.9.4-linux-x64/{bin,include,lib,share} /usr/local


# mongodb-linux-x86_64-amazon-3.4.1
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.4.3.tgz
tar -xvzf mongodb-linux-x86_64-rhel70-3.4.3.tgz
sudo cp -a mongodb-linux-x86_64-rhel70-3.4.3/bin /usr/local


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

# Install body-parser
npm install body-parser --save
```

## API Usage

```
PUT  (GET request)
  Content-Type:   application/json
  Body:           JSON containing key "token" with unique token"

POST
  Content-Type:   application/json
  Body:           JSON containing
                  -key "token" with unique token"
                  -other data relevant to object
DELETE
  Content-Type:   application/json
  Body:           JSON containing
                  -key "token" with unique token"
                  --other data contained in the object that will be deleted
```

