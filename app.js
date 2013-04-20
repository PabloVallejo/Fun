/**
* Fun • Messaging
*/

var express = require( 'express' )
,   http = require( 'http' )
,   app = express()
,   events = require( 'events' )
,   port = process.env.PORT || 3000;


/**
* App configuration
*/
app.configure( function() {

    // Set port
    app.set( 'port', port );

    // Views dir
    app.set( 'views', __dirname + '/app/server/views' );

    // View engine
    app.set( 'view engine', 'ejs' );

    // Use
    app.use( express.bodyParser() );
    app.use( express.cookieParser() );
    app.use( express.session({ secret: '3nj6K9lg5M0Yb7XU4' }) );
    app.use( express.methodOverride() );

    // Use less
    app.use( require( 'less-middleware' )({ src: __dirname + '/app/public/' } ) );

    // Static
    app.use( express.static( __dirname + '/app/public' ) );

});


// Router
require( './app/server/router' )( app );

// Create server
http.createServer( app ).listen( app.get( 'port' ), function() {
    console.log( 'Express server listening on port ' + app.get( 'port' ) );
});