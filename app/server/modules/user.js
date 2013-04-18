/**
* User
*/

/**
* Module dependencies.
*/
var mongo = require( 'mongodb' );

var Server = mongo.Server
,   Db = mongo.Db
,   BSON = mongo.BSONPure;


// Database Server
var server = new Server( 'localhost', 27017, { auto_recunnect:  true });
db = new Db( 'test', server, { safe: true });

// Open connection
db.open( function( err, db ) {

    // Error
    if( err ) {
        console.log( 'Error while connecting to "test" database.' );
        return;
    }

    // Select collection
    db.collection( 'userschemas', { safe:true }, function( err, collection ) {

        // Error
        if ( err ) {
            console.log( 'Error while selecting collection userschemas.' );
            return;
        }

        // Success
        console.log( 'Collection userschemas selected.' );

    });

    console.log( 'Connected to test databse' );

});


//-------------
// Exports
//------------

/**
* Fids an user by username
* @param { str } user username
*/
exports.findByUsername = function( username, fn ) {

    console.log( 'Retrieving user ' + username );
    db.collection( 'userschemas', function( err, collection ) {

        // Find one
        collection.findOne({ 'username': username }, function( err, items ) {

            // err
            if ( err ) {
                return false;
            }

            // Success
            return items;

        });
    });

}