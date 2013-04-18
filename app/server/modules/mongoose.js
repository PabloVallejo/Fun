
/**
* Database connection object
*/


/**
* Module dependencies.
*/
var mongoose = require( 'mongoose' )
// ,   crypto = require( 'crypto' );

// Make connection
mongoose.connect( 'mongodb://localhost/test' );

// Database
var db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'Database connection error'));

// Connection success
db.once( 'open', function() {
    console.log( 'Connected' );
});


module.exports = mongoose;