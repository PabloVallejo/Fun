/**
* app/server/router
*/

/**
* Module dependenies
*/
var App = require( './routers/app' );


// Router module
module.exports = function( app ) {

    //-------------------
    // Site urls
    //---------------------
    app.get( '/', App.index );


    //-----------------------------
    // Login
    //-----------------------------
    app.post( '/login', App.login );


    //----------------------------
    // User
    //----------------------------
    app.post( '/register', App.createUser );


    //---------------------------
    // Messages
    //---------------------------
    app.post( '/message', App.newMessage );


    //---------------------------------
    // Default view
    //---------------------------------
    app.get( '/*', function( req, res ) {
        res.json( 404, { status: 'Not found.' } );
    });


    //---------------------------
    // Debug
    //---------------------------
    app.get( '/debug', App.debug );

}
