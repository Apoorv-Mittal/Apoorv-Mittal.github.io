/**
 * Created by apoorvmittal on 1/8/17.
 */
var images = ['c817012.jpg','588d7ab.jpg', '64fac45.jpg'];
$ (document).ready(function () {
    $( "div" ).fadeIn( 3000 );
    $( "nav" ).slideDown( 3000 );
    $('.page-bg').css({'background-image': 'url(' + images[Math.floor(Math.random() *      images.length)] + ')'});
});
