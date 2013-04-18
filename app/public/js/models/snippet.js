//------------------------
// models/snippet
//-------------------------
( function( config, models, views, collections, routers, utils ) {

    // Messages model
    //-------------------

    // The DOM element for a message item...
    models.Snippet = Backbone.Model.extend({

            defaults: {
                    ID: _.generateId()
                ,   title: 'New Snippet'
                ,   content: ''
                ,   createdAt: new Date()
            }

        ,   validate: function() {

                // Validate ID
                if ( this.ID.length != 32 ) {
                    return 'ID must be a 32 characters string.';
                }

            }

    });



}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );
