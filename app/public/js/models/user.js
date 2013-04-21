//-----------------------------
// models/user
//-------------------------------
( function( config, models, views, routers, utils ) {


    // Message model
    //--------------

    // Our basic **message* element has `author` and `message` attributes
    models.User = Backbone.Model.extend({

            // Default attrs
            defaults: {
            }

            // Url
        ,   url: '/login'

            // Logs a user in
        ,   login: function() {

                var success = function( model, response, options ) {
                    model.trigger( 'login',  model, response, options );
                }

                // Send the request
                this.save( this.toJSON(), { success: success, url: '/login' } );

            }

            // Registers users
        ,   register: function() {

                var success = function( model, response, options ) {
                    model.trigger( 'register', model, response, options );
                }

                this.save( this.toJSON(), { success: success, url: '/register' } );

            }

    });


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.routes, this.appArgs.utils );
