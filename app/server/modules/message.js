
/**
* Message model
*/

var mongoose = require( './mongoose' )
,   objectId = mongoose.Schema.Types.ObjectId;



/**
* Messages schema
*/
var MessageSchema = mongoose.Schema({

        _id: objectId
    ,   author_id: objectId
    ,   author_display_name: String
    ,   author_avatar_src: String
    ,   message_text: String
    ,   date: Date

});

/**
* Get last 20 messages
*/
MessageSchema.statics.getMessages = function( limit, fn ) {

    if ( typeof limit != 'number' ) {
        limit = 20;
    }

    this.find().sort({ $natural: -1 }).limit( limit ).exec( fn );
};


/**
* Message model
*/
var Message = mongoose.model( 'MessageSchema', MessageSchema );


/**
* Export message
*/
module.exports = Message;
