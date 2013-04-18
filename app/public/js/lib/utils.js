//-----------------------------
// lib/utils
//-------------------------------

// Unique id generator
// Taken from chat-nodejs: https://github.com/uditalias/chat-nodejs
// and modified to remove hyphens
_.generateId = function () {
   var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return ( S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
};



/**
* Converts a cammelcased string to a underscored one
* @return { string }
*/
_.cammelCaseToUnderscore = function( string ) {

    return string.replace( /([A-Z])/g, function( $1 ) {

        return "_" + $1 . toLowerCase();
    });
}

/**
* Converts hiphens to underscores
* @return { string }
*/
_.hyphenToUnderscore = function( string ) {
    return string.replace( /([-])/g, function( $1 ) {

        return "_";

    });
}



/**
* Maps form inputs generated when using serializeArray();
* pusshes them to an array in a key( name ) value( value ) structure
*
* @param { array } serializeArray() generated array
* @return { array } mapped array
*
*/
_.mapFormInputs = function( data, type, dropEmpty ) {

    var formData = type || []
    ,   _this = this;

    $.each( data, function( key, val ) {

        replaced = _.hyphenToUnderscore( val.name );

        if ( dropEmpty ) {

            if ( val.value != "" ) {
                formData[ replaced ] = val.value;
            }

        }

        else {
            formData[ replaced ] = val.value;
        }

    });

    return formData;

}


 /**
* Gets the form data
* @param { obj || str } form object or selector
* @return { obj } mapped form
*/
_.getFormData = function( form, dropEmpty ) {

    var data
    ,   _this = this
    ,   off
    ,   name;

    if ( dropEmpty == null ) {
        dropEmpty = true;
    }

    data = $( form ).serializeArray();
    data = _.mapFormInputs( data, {}, dropEmpty );

    $.each( data, function( key, value ) {
        if ( value == "on" ) {
            data[ key ] = true;
        }
    });

    // Check for empty values
    $( form ).find( "input[type=checkbox]" ).each( function() {
        if ( ! $( this ).is( ":checked" ) ) {

            name = $( this ).attr( "name" );
            name = _.hyphenToUnderscore( name );

            off = $( this ).data( "off" );


            if ( typeof off != "undefined" ) {
                data[ name ] = off;

            } else {
               data[ name ] = false;
            }
        }

    });

    return data;

}