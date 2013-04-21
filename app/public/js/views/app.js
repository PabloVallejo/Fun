//---------------
// views/app
//-----------------
( function( config, models, views, collections, routers, utils ) {

    // The application
    //-----------------
    views.Application = Backbone.View.extend({

            // Bind to element
            el: '.page'

            // Template for messages
        ,   messageTemplate: $( '#message' ).html()

            // Delegate events
        ,   events: {

            }

            // At initialization, we bind to the relevan events on the
            // `messages` collection when items are added or changed.
        ,   initialize: function() {

                // New message element
                this.input = this.$( '.new-message' );

                // Messages view
                this.message = new views.Message();

                // User
                this.user = new views.User();

                // Template
                this.template = new views.Template();

            }

            // Render
        ,   render: function() {

            }

            // Create a new message after the return key's pressed
        ,   createOnEnter: function( e ) {

                if ( e.which != 13 || !this.input.val().trim() ) {
                    return;
                }

                // Add message to collection
                collections.Messages.create( this.newAttributes() );
                this.input.val( '' );
            }


    });


    // Start app
    new views.Application();


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );