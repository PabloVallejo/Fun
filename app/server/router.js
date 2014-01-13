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
    app.get( '/app', App.app );


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
    // app.post( '/message', function( req, res ) {

    //     return res.send({ message: 'Gotten' });
    // });


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
