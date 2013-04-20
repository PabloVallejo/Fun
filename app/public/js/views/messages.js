//------------------------
// Popsy - views/messages
//-------------------------
( function( config, models, views, collections, routers, utils ) {

    // Messages item view
    //-------------------

    // The DOM element for a message item...
    views.Message = Backbone.View.extend({

            // ... Tag
            el: '.page'


            // Template for a single message
        ,   template: _.template( $( '#message' ).html() )

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
        ,   onSync: function( model ) {
            }

            // Create event
        ,   onAdd: function( model, collection, c ) {

                // Render the element
                var container = '.messages'
                ,   el = $( this.template( model.toJSON() ) );

                el.hide();
                $( container ).prepend( el );
                el.slideDown();

            }

            // Render
        ,   render: function() {

                // var messages = '.messages'
                // ,   template = this.template( this.model.toJSON() );

                // console.log( template );
                // this.$el.html( this.template( this.model.toJSON() ) );
                // return this;

            }

    });



}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );
