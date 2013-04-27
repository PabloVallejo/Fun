/**
* Fun • Messaging
*/

var http = require( 'http' ).Server
// ,   request = require( 'request' )
,   request = require( 'supertest' )
,   expect = require( 'expect.js' );


/**
* Basic
*/

describe( 'Fun', function() {

    it( 'Server should respond to /', function( done ) {

        var srv = http();

        // Main url should be OK
        request( srv )
            .get( 'http://localhost:3000' )
            .end( function( err, res ) {

                if( err ) return done( err );
                console.log( res.body );
                expect( res.status ).to.be( 200 );
                done();
            });


        // Invalid url should give 404
        // request( srv )
        //     .get( 'http://localhost:3000/unexistent' )
        //     .end( function( err, res ) {

        //         if ( err ) return done( err );
        //         expect( res.status ).to.be( 404 );
        //         done();
        //     });

    });

});

