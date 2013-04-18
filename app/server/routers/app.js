
/**
* Main router for the app
*/
var User = require( '../modules/account-manager' )
,   Message = require( '../modules/message' )
,   crypto = require( 'crypto' );


/**
* Entrance
* @uses `User` & `crypto`
*/
function Entrance( req, res ) {

    // Config
    this.config = {
            cookieName: '_entrance_loggedin'
        // ,   expiration: new Date().getTime() + 1209600
        ,   expiration: new Date( Date.now() + 900000 )
        // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    }

    // Response
    this.res = res;

    // Request
    this.req = req;

};

Entrance.prototype = {


        /**
        * Helper function to hash a string
        */
       hash: function( str ) {

            var shasum
            ,   hash;

            if ( typeof str != 'number' && typeof str != 'string' ) {
                return false;
            }

            // Create hash
            shasum = crypto.createHash( 'sha1' );

            // Digest hash
            hash = shasum.update( str ).digest( 'hex' );
            return hash;

        }


        /**
        * Sets the authentications cookie
        */
    ,   setAuthCookie: function( user ) {

            var pFrag
            ,   cookie
            ,   key;

            if ( typeof user.username == 'undefined' || typeof user.password == 'undefined' ) {
                return false;
            }

            // Get
            pFrag = user.password.substr( 8, 12 );
            // key = this.hash( user.username + '|' + pFrag + '|' + this.config.expiration.getTime() );
            key = this.hash( user.username + '|' + pFrag + '|' + this.config.expiration.getTime() );

            // Cookie
            // cookie = user.username + '|' + this.config.expiration.getTime() + '|' + key;
            cookie = user.username + '|' + this.config.expiration + '|' + key;

            // Set the cookie
            // this.res.cookie( this.config.cookieName, cookie, { expires: this.config.expiration, path: '/', maxAge: this.config.expiration } );
            this.res.cookie( this.config.cookieName, cookie, { expires: this.config.expiration, path: '/' } );
            return true;
        }



        /**
        * Parses the logged in cookie
        */
    ,   parseAuthCookie: function() {

            var cookie = this.req.cookies[ this.config.cookieName ]
            ,   elements;

            if ( typeof cookie == 'undefined' ) return false;
            elements = cookie.split( '|' );

            if( elements.length != 3 ) return false;

            // Return cookie elements
            return { username: elements[ 0 ], expiration: elements[ 1 ], key: elements[ 2 ] };

        }

        /**
        * Checks whether the auth cookie is valid
        */
    ,   validateAuthCookie: function( fn ) {

            var cookie = this.parseAuthCookie()
            ,   time = new Date()
            ,   _this = this
            ,   pFrag
            ,   pass
            ,   key;


            // Check expiration
            if( cookie == false ) return false;
            if( cookie.expiration < time.getTime() ) {
                return fn( 'Expired cookie', null );
            }

            // Get user referenced in cookie
            User.findByUsername( cookie.username, function( err, user ) {

                if ( err ) {
                    return fn( err, null );
                }

                if ( ! user ) {
                    return fn( 'User not found.', null );
                }

                if ( typeof user.password == 'undefined' ) {
                    return fn( 'User has no password.', null );
                }

                // Get
                pFrag = user.password.substr( 8, 12 );
                key = _this.hash( cookie.username + '|' + pFrag + '|' + cookie.expiration );

                if ( key == cookie.key ) {
                    return fn( null, user );
                }

                else {
                    return fn( 'Malformed cookie', null );
                }

            });

        }

        /**
        * Checks whether a user has a valid logged in cookie
        */
    ,   isUserLoggedIn: function( fn ) {

            return this.validateAuthCookie( fn );
        }


        /**
        * Logs a user in
        */
    ,   login: function( creds, fn ) {

            var login
            ,   _this = this
            ,   required = [ 'username', 'password' ]
            ,   setCookie
            ,   elements = [];

            for ( var i = 0; i < required.length; i++ ) {
                if ( typeof creds[ required[ i ] ] == 'undefined' ) {
                    return false;
                }
            }


            // Check for user existence
            User.verifyCredentials( creds.username, creds.password, function( err, user ) {

                // Error
                if ( err ) return fn( false );

                if ( typeof user != 'object' ) {
                    return fn( false );
                }

                for ( b in user ) {
                    elements.push( 1 );
                }

                if( ! elements.length ) {
                    return false;
                }

                if ( _this.setAuthCookie( user ) ) {
                    return fn( user );
                }

                return fn( false );

            });

        }

}


/**
* Entrance
*/
exports.entrance = new Entrance;

/**
* App debug
*/
exports.app = function( req, res ) {

    var user = {
            _id: none
        ,   display_name: 'Pablo Vallejo'
        ,   username: 'pablo'
    }

    res.render( 'app', { user: user } );
}

/**
* Index View
*/
exports.index = function( req, res ) {

    var entrance = new Entrance( req, res )
    ,   _user;

    // Route
    entrance.isUserLoggedIn( function( err, user ) {

        _user = user;

        if( err ) res.render( 'index' );


        // Get messges
        Message.getMessages( 20, function( err, msgs ) {

            if ( err ) {
                res.render( 'app', { messages: {}, errors: err });
            }

            res.render( 'app', { messages: {}, user: _user });

        });

    });

}

/**
* App page
*/
exports.app = function( req, res ) {

    // Render app
    res.render( 'app', {} );
}

/**
* Login request
*/
exports.login = function( req, res ) {

    var entrance
    ,   promise
    ,   fields = [ 'username', 'password' ]
    ,   data = {};

    for ( var i = 0; i < fields.length; i++ ) {
        data[ fields[ i ] ] = req.param( fields[ i ] );
    }

    entrance = new Entrance( req, res );

    // Login
    entrance.login( data, function( user ) {

        res.send({ user: user });
    });


}


/**
* Creates a user
* Not implemented yet.
*/
exports.createUser = function( req, res ) {

    var user = User
    ,   fields = [ 'username', 'password' ]
    ,   data = {}
    ,   entrance = new Entrance( req, res );

    // Get post data
    for ( var i = 0; i < fields.length; i++ ) {
        data[ fields[ i ] ] = req.param( fields[ i ] );
    };

    // Hash password
    data[ 'password' ] = entrance.hash( data[ 'password' ] );

    // Create model + save user
    candidate = new User( data );
    candidate.save( function( err, user ) {

        if( err ) {
            res.send({ error: 'User could not be created' });
        }

        // Send some user data
        res.send({ user: user });

    });


}

/**
* New message
*/
exports.newMessage = function( req, res ) {

    // Save message
    var data = {}
    ,   errors = []
    ,   fields = [ 'author_id', 'author_display_name'
            , 'message_text', 'date'
        ];

    for ( var i=0; i < fields.length; i++ ) {

        if ( typeof req.param( fields[ i ] ) == 'undefined' ) {
            errors.push( 'Missing ' + fields[ i ] );
            continue;
        }

        // Set data
        data[ fields[ i ] ] = req.param( fields[ i ] );
    }

    // Were there errors?
    if ( errors.length ) {
        res.send({ message: false, errors: errors });
    }

    // Save message
    message = new Message( data );
    message.save( function( err, message ) {

        if ( err ) {
            res.send({ message: false, error: err });
        }

        res.send({ message: message });

    });

}


/**
* Debug
*/
exports.debug = function( req, res ) {

    res.send({ debug: 'Gotten' });

}

// <input type="hidden" name="author-id" value="<%= user._id %>">
// <input type="hidden" name="author-display-name" value="<%= user.display_name %>">
//  <% messages.forEach( function( message ) { %>

//     <div class="message">
//         <div class="avatar">
//             <img class="img-circle" src="images/user-1.jpg" alt="">
//         </div>
//         <div class="message-body">
//             <h4><%= message.author_display_name %><span class="small"> • 10 days ago<span></h4>
//             <p><%= message.message_text %></p>
//         </div>
//     </div>

// <% }) %>