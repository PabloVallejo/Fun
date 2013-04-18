/**
* Fun • Messaging
*/

var http = require( 'http' ).Server
// ,   request = require( 'request' );
,   request = require( 'supertest' )
,   expect = require( 'expect.js' );


/**
* Basic
*/

describe( 'Fun', function() {

    it( 'Server should respond to /', function( done ) {

        var srv = http();

        request( srv )
            .get( 'http://localhost:3000' )
            .end( function( err, res ) {

                if( err ) return done( err );
                // console.log( res );
                expect( res.status ).to.be( 200 );
                done();
            })

    });

});

