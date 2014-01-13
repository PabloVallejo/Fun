
/**
* Account manager
*/


/**
* Module dependencies.
*/
var crypto = require( 'crypto' )
,   mongoose = require( './mongoose' );

/**
* Mongoose
*/
var objectId = mongoose.Schema.Types.ObjectId;

/**
* User scheme
*/
var UserSchema = mongoose.Schema({
        display_name: String
    ,   username: { type: String, index: { unique: true } }
    ,   email: { type: String }
    ,   password: String
    ,   avatar_src: String
    ,   bio: String
});


/**
* Get specific user by email
* @param { string } user email
*/
UserSchema.statics.findByEmail = function( email, fn ) {
    this.find({ email: email }, fn );
}

/**
* Finds a specific user by username
* @param { string } username
*/
UserSchema.statics.findByUsername = function( username, fn ) {
    this.findOne({ username: username },  fn );
}

/**
* Find by ID
* @param { int } user id
*/
UserSchema.statics.findById = function( id, fn ) {
    this.find({ _id: id }, fn );
}

/**
* Validates login credentials
* @param { str} user username
* @param { str } user pass
*/
UserSchema.statics.verifyCredentials = function( username, password, fn ) {

    var hash;

    // Encrypt password
    hash = crypto.createHash( 'sha1' ).update( password ).digest( 'hex' );

    this.findOne({ username: username, password: hash }, fn );
}

/**
* User model
*/
var User = mongoose.model( 'UserSchema', UserSchema );


// E.G
// var user1 = new User({ name: 'Pablo', email: 'p@gmail.com', pass: '123' });

/**
* Export user
*/
module.exports = User;