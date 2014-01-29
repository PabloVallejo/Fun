/**
 * Module to get gravatars
 * Adapted from https://github.com/emerleite/node-gravatar/blob/master/lib/gravatar.js
 */
var crypto = require( 'crypto' )
  , querystring = require( 'querystring' );

var gravatar = module.exports = {
    url: function ( email, options, https ) {
      	var baseURL = ( https && "https://secure.gravatar.com/avatar/" ) || 'http://www.gravatar.com/avatar/'
      	, 	queryData = querystring.stringify( options )
      	, 	query = ( queryData && "?" + queryData ) || ""

      return baseURL + crypto.createHash( 'md5' ).update( email.toLowerCase().trim() ).digest( 'hex' ) + query;
    }
};