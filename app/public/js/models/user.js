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
        // ,   url: '/user'

    });


}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.routes, this.appArgs.utils );
