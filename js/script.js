/* Author: Drew Wells

*/
var $ = window.$;

$( "#container" ).removeClass( 'see-through' );

$( 'a' ).one( 'click', function( event ){


    var anchor = this;
    $( '#container' ).addClass( 'see-through' );
    setTimeout(function(){
        $( '#container' ).removeClass( 'see-through' );
        anchor.click();
    }, 2000 );

    return false;
});























