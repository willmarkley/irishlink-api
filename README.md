# irishlink-api

Irish Link is an iOS application that connects those who want a software application made with those who know how to make it.  By putting these two isolated groups on campus in contact, the ideators can make their ideas come to life and developers can gain valuable experience outside of the classroom.  

## API Usage

```
PUT  (GET request)
  Content-Type:   application/json
  Body:           JSON containing key "token" with unique token

POST
  Content-Type:   application/json
  Body:           JSON containing
                  -key "token" with unique token
                  -other data relevant to object
DELETE
  Content-Type:   application/json
  Body:           JSON containing
                  -key "token" with unique token
                  -other data contained in the object that will be deleted
```

