(function ($){
    'use strict';

// code start

$('.icon .fa-bars').on('click', function (){
    $('.all').animate({
        top:0
    });
})   

$('.menu-close .fa-times').on('click', function (){
    $('.all').animate({
        top:-1000
    });
})


$(window).resize(function (){
    ('.all').removeAttr('style')
})


}) (jQuery);