//------------------------
// Fun - views/messages
//-------------------------
( function( config, models, views, collections, routers, utils ) {

    // Messages item view
    //-------------------

    // The DOM element for a message item...
    views.Message = Backbone.View.extend({

            // ... Tag
            el: '.page'

            // Template for a single message
        ,   template: new EJS({ url: config.templatesUrl + 'message' })

            // The DOM events specific to a message
        ,   events: {
                'submit .new-message-form': 'newMessage'
            }

            // Initialize
        ,   initialize: function() {

                // Create model hook
                collections.Messages.on( 'add', this.onAdd, this );

                // Sync
                collections.Messages.on( 'sync', this.onSync, this );
            }


            // New message
        ,   newMessage: function( e ) {
                e.preventDefault();

                var target = e.currentTarget
                ,   data
                ,   message
                ,   date = new Date().getTime();

                // Get message
                data = _.getFormData( target );
                data.date = date;

                // Create the model
                collections.Messages.create( data );


            }

            // Sync event
        ,   onSync: function( model, response, options ) {
                console.log( response );
            }

            // Create event
        ,   onAdd: function( model, collection, c ) {

                // Render the element
                var container = '.messages'
                ,   el = $( this.template.render( model.toJSON() ) );

                el.hide();
                $( container ).prepend( el );
                el.slideDown();

            }

    });



}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );
