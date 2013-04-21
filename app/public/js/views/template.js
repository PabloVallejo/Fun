//---------------
// views/template
//-----------------
( function( config, models, views, collections, routers, utils ) {

    // The application
    //-----------------
    views.Template = Backbone.View.extend({

            // Bind to element
            el: '.page'

            // Constructor
        ,   initialize: function() {

                // Selectors
                this.backdrop = '.modal-backdrop';
            }

            // Bind events
        ,   events: {
                    'click [data-toggle="modal"]' : 'openModal'
                ,   'click .close': 'closeModal'
            }

            // Opens the modal
        ,   openModal: function( e ) {
                e.preventDefault();

                var link = e.currentTarget
                ,   target = $( link ).attr( 'href' ) || $(link ).data( 'target' );

                // Open
                $( target ).show();
                $( this.backdrop ).show();

            }

            // Closes the modal
        ,   closeModal: function( e ) {
                e.preventDefault;

                var link = e.currentTarget
                ,   dismiss = $( link ).data( 'dismiss' )
                ,   map;

                // Dismiss map
                map = {
                    'register': '.modal.register-modal'
                }

                if ( typeof map[ dismiss ] == 'undefined' ) return;

                // Hide
                $( map[ dismiss ] ).hide();
                $( this.backdrop ).hide();

            }

    });



}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );