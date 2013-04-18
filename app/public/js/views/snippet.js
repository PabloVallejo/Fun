//------------------------
// Popsy - views/snippet
//-------------------------
( function( config, models, views, collections, routers, utils ) {

    // Messages item view
    //-------------------

    // The DOM element for a message item...
    views.Snippet = Backbone.View.extend({

            // Element to bind to
            el: '.snippet-modal'


            // The DOM events specific to a message
        ,   events: {
                    'change .snippet-language': 'changeLanguage'
                ,   'click .cancel-snippet': 'cancel'
            }

            // Initialize
        ,   initialize: function() {

                // Setup editor
                this.setupEditor();
            }

            // Render
        ,   render: function() {

            }

            // Initializes the editor
        ,   setupEditor: function() {

                this.editor = this.editor || ace.edit( 'code-editor' )
                ,   themes = [ 'ambience', 'chaos', 'chrome', 'clouds', 'cloud_midnight'
                            ,   'cobals', 'crimson_editor', 'dawn', 'eclipse', 'github', 'idle_fingers',  'kr_theme', 'merbivore', 'mono_industrial'
                            ,   'monokai', 'pastel_on_dark',  'solarized_dark', 'solarized_light', 'textmate', 'tomorrow', 'tomorrow_night'
                            ,   'tomorrow_night_blue', 'tomorrow_night_bright', 'tomorrow_night_eighties', 'twilight', 'vibrant_ink', 'xcode'
                    ];

                this.editor.setTheme( "ace/theme/" + themes[ 14 ] );
                this.editor.getSession().setMode( "ace/mode/php" );

            }

            // Opens the modal
        ,   open: function() {

                var modal = '.snippet-modal'

                this.showOverlay();
                $( modal ).show();

            }

            // Hides the modal
        ,   cancel: function() {

                var modal = '.snippet-modal'
                ,   overlay = '.main-overlay';

                $( modal ).hide();
                $( overlay ).hide();

            }


            // Sets the sintaxis for a certain language
            // How to get selected option taken from
            // from http://stackoverflow.com/questions/8011988/triggering-an-event-on-el-in-backbone-view
        ,   changeLanguage: function( e ) {

                var field = e.currentTarget
                ,   lang = $( 'option:selected', field ).val()
                ,   available = [ '', 'php', 'css', 'javascript', 'html' ];

                if ( ! $.inArray( lang, available ) ) {
                    console.log( 'Language ' + lang + ' is not available.' );
                    return;
                }

                this.editor.getSession().setMode( "ace/mode/" + lang );
            }

            // Shows overlay
        ,   showOverlay: function() {
                var overlay = '.main-overlay';
                $( overlay ).show();
            }

    });



}).call( this, this.appArgs.config, this.appArgs.models, this.appArgs.views, this.appArgs.collections, this.appArgs.routes, this.appArgs.utils );
