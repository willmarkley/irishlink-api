# irishlink-api

Irish Link is an [iOS application][repo] that connects those who want a software application made with those who know how to make it.  By putting these two isolated groups on campus in contact, the ideators can make their ideas come to life and developers can gain valuable experience outside of the classroom.  

The mobile application developed in Swift and Javascript by William Markley.  The REST API back-end was built with [Node.js][1] and [MongoDB][2], using JSON as the HTTP bodies. [PM2][3] and [NGINX][4] were used to make the back-end a stable production environment. The [front-end iOS application][repo] was developed in Xcode and relies on [Google Sign-In][5] and [IQ Keyboard Manager][6].  

If you're interested in helping with the project, please contact wmarkley@nd.edu.  

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

## Screenshots

![irish-link1](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link1.png)  
![irish-link2](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link2.png)  
![irish-link3](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link3.png)  
![irish-link4](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link4.png)  
![irish-link5](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link5.png)  
![irish-link6](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link6.png)  
![irish-link7](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link7.png)  
![irish-link8](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link8.png)  
![irish-link9](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link9.png)  
![irish-link10](https://raw.githubusercontent.com/willmarkley/willmarkley.com/master/img/irish-link10.png)  

[1]: https://nodejs.org/en/
[2]: https://www.mongodb.com/
[3]: https://www.npmjs.com/package/pm2
[4]: https://nginx.org/
[5]: https://developers.google.com/identity/sign-in/ios/
[6]: https://github.com/hackiftekhar/IQKeyboardManager
[repo]: https://github.com/willmarkley/irishlink-ios
