
/**
* Utilities
*/


var crypto = require( 'crypto' );



/**
* Utils object
*/
var Utils = function() {

};



/**
* Hashes a string
* @param { str } string to hash
* @return { str } hashed str
*/
Utils.prototype.hash = function( str ) {

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
* Exports
*/
module.exports = new Utils;