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



    //---------------------------
    // Debug
    //---------------------------
    // app.post( '/debug', App.debug );
    app.get( '/debug', App.debug );

}
