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

            // Delegate events for adding new messages
        ,   events: {
                   // 'submit .new-message-form': 'createOnSubmit'
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

            }

            // Render
        ,   render: function() {

            }

            // Add a single message to the list by creating a view for it
            // and appending its element to the
        // ,   addOne: function( message ) {

        //         var view = new views.Message({ model: message });
        //         $( '#all-messages' ).append( view.render().el );

        //     }

            // Generate the attributes for a new message item
        // ,   newAttributes: function() {
        //         return {
        //                 author: 'Pablo Vallejo'
        //             ,   message: this.input.val()
        //         }
        //     }

            // New message
        // ,   createOnSubmit: function( e ) {
        //         e.preventDefault();

        //         var target = e.currentTarget
        //         ,   data;

        //         // Get message
        //         data = _.getFormData( target );

        //         // Get attributes
        //         collection.Messages.create( this.newAttributes() );



        //     }

            // Create a new message after the return key's pressed
        ,   createOnEnter: function( e ) {

                if ( e.which != 13 || !this.input.val().trim() ) {
                    return;
                }

                // Add message to collection
                collections.Messages.create( this.newAttributes() );
                this.input.val( '' );
            }

            // Initializes ACE and opens the snippet modal
        ,   openSnippetModal: function() {

                // Call modal view
                this.SnippetView = this.SnippetView || new views.Snippet;

                // Open modal
                this.SnippetView.open();

            }

    });


    // Start app
    new views.Application();


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );