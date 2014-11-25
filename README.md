Fun
===

NodeJS Wall messages app with user access control. The main database system is `MongoDb` which stores users details
and messages.
In the Front-end, `Backbone` is used to handle the interaction.
Some concepts has been adapted from `WordPress` and `Twitter Bootstrap`.

![Fun](https://raw.githubusercontent.com/PabloVallejo/Fun/master/app-login.png)

<hr />

![Fun](https://raw.githubusercontent.com/PabloVallejo/Fun/master/app-wall.png)

## Quick start
    
```bash 

# Clone the repo
$ git clone https://github.com/PabloVallejo/Fun.git

$ cd Fun

# Install packages
$ npm install
```

## Initialize

Just initialize MongoDb and then, the application using `node app` from within the root of the repository. That's it, now you can go to `http://localhost:3000` and use the  app.

```bash    
# Start MongoDb
$ c:/mongodb/bin/mongod.exe
    
# Start app
$ node app
```

# Deploying to Heroku

![Heroku](https://d1lpkba4w1baqt.cloudfront.net/heroku-logo-light-88x31.png) 

Fun can be deployed to Heroku pretty easy. Just clone the repository, create a Heroku app, add MongoLab addon to it so that it can use MongoDb and you're done. Then you can push your app.

**Clone the repository**
```bash
$ git clone https://github.com/PabloVallejo/Fun.git

# Change directory to Fun
$ cd Fun
```

**Create a Heroku app**
```bash
$ heroku apps:create myapp

# Add MongoLab to it
$ heroku addons:add mongolab
```

**Publish it**
```bash
$ git push heroku master
```



## Requirements

MongoDb and Node JS are required to run this app.
* [MongoDb](https://www.mongodb.com/)
* [Node JS](http://nodejs.org/)

