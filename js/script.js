/* Author: Drew Wells

*/
var $ = window.$;

$( "#container" ).removeClass( 'see-through' );

$( 'a' ).one( 'click', function( event ){


    var anchor = this;
    $( '#container' ).addClass( 'see-through' );

    setTimeout(function(){
        //Days like these I hate programming
        window.location = anchor.href;
        $( "#container" ).removeClass( 'see-through' );
    }, 2000 );

    return false;
});























