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
                ,   'submit .register-form': 'register'
            }


            // At initialization, we bind to the relevan events on the
            // `messages` collection when items are added or changed.
        ,   initialize: function() {

                // User model
                this.model = new models.User();

                // On Register
                this.model.on( 'register', this.onRegister );

                // On login
                this.model.on( 'login', this.onLogin );
            }

            // After registration
        ,   onRegister: function( model, response, options ) {

                // Dismiss loading
                // Close modal
                var modal = '.register-modal'
                ,   backdrop = '.modal-backdrop';

                $( modal ).hide()
                $( backdrop ).hide();

                alert( 'Voila, You can now login using your credentials.' );
            }

            // On login
        ,   onLogin: function( model, response, options ) {

                if ( typeof response.error == 'undefined' ) {
                    return window.location.reload();
                }

                alert( response.error );
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
                data = _.getFormData( target );

                // Send login request
                this.model.set( data );
                this.model.login();

            }

            // Register form
        ,   register: function( e ) {
                e.preventDefault();

                var target = e.currentTarget
                ,   data;

                // Loading status
                $(  target ).find( 'input[type="submit"]' )
                    .addClass( 'disabled' )
                    .attr( 'value', 'Loading...' );

                // Get data
                data = _.getFormData( target );
                this.model.set( data );

                // Register
                this.model.register();
            }


    });


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );