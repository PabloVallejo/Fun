//-----------------------------
// Popsy - models/messages
//-------------------------------
( function( config, models, views, routers, utils ) {


    // Message model
    //--------------

    // Our basic **message* element has `author` and `message` attributes
    models.Message = Backbone.Model.extend({

            // Default attrs
            defaults: {
                    // _id: 0
                    author_id: ''
                ,   author_display_name: ''
                ,   message_text: ''
                ,   date: ''
            }

            // Parses the content gotten from server
        ,   parse: function() {

            }

            // Url
        ,   url: '/message'

    });


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.routes, this.appArgs.utils );
