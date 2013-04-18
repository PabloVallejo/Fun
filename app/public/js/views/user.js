//---------------
// views/user
//-----------------
( function( config, models, views, collections, routers, utils ) {

    // The user view
    //-----------------
    views.User = Backbone.View.extend({

            // Bind to element
            el: '.page'


            // Delegate events for adding new messages
        ,   events: {
                'submit #login-form': 'login'
            }



            // At initialization, we bind to the relevan events on the
            // `messages` collection when items are added or changed.
        ,   initialize: function() {

                // User model
                this.model = new models.User();
            }

            // Sync event
        ,   onSync: function( model, response, options ) {

                console.log( response );

            }

            // Render
        ,   render: function() {

            }

            // Login event
        ,   login: function( e ) {
                e.preventDefault();

                var data
                ,   target = e.currentTarget;

                // Get login data
                data = _.getFormData( e.currentTarget );

                this.model.set( data );

                console.log( this.model.toJSON() );
                this.model.save();

            }


    });


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );