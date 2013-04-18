//-----------------------------
// collections/messages
//-------------------------------
( function( config, models, views,  collections, routers, utils ) {


    // Message collection
    //----------------------

    // The collection of messages
    var Messages = Backbone.Collection.extend({

            // Reference to this collection's model
            model: models.Message


            // Return all messages
        ,   all: function() {
                return message.get( '' );
            }

    });


    // Instantiate
    collections.Messages = new Messages();

}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );
