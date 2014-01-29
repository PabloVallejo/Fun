Fun
===

NodeJS Wall messages app with user access control. The main database system is `MongoDb` which stores users details
and messages.
In the Front-end, `Backbone` is used to handle the interaction.
Some concepts has been adapted from `WordPress` and `Twitter Bootstrap`.

![Fun](https://raw2.github.com/PabloVallejo/Fun/master/app-login.png)

<hr />

![Fun](https://raw2.github.com/PabloVallejo/Fun/master/app-wall.png)

## How to install

    $ npm install

## Start

Just initialize MongoDb and then, the application using `node app` from within the root of the repository. That's it, now you can go to `http://localhost:3000` and use the  app.

```bash    
# Start MongoDb
$ c:/mongodb/bin/mongod.exe
    
# Start app
$ node app
```

## Requirements

MongoDb and Node JS are required to run this app.
* [MongoDb](https://www.mongodb.com/)
* [Node JS](http://nodejs.org/)

