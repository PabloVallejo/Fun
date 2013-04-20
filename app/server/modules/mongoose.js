
/**
* Database connection object
*/


/**
* Module dependencies.
*/
var mongoose = require( 'mongoose' )
// ,   crypto = require( 'crypto' );

var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/test';

// Make connection
// mongoose.connect( 'mongodb://localhost/test' );
mongoose.connect( mongoUri );

// Database
var db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'Database connection error'));

// Connection success
db.once( 'open', function() {
    console.log( 'Connected' );
});


module.exports = mongoose;