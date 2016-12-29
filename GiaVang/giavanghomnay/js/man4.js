// JavaScript Document
jQuery(document).ready(function($){
  $(window).load(function(){
    $('.flexslider').flexslider({
    animation: 'fade',
    slideshowSpeed: 8000
    });
  });

    var aboveHeight = $('#top-wrapper').outerHeight();
        $(window).scroll(function(){
                if ($(window).scrollTop() > aboveHeight){
                $('#nav').addClass('fixed-nav').css('top','0').next()
                .css('padding-top','43px');
                } else {
                $('#nav').removeClass('fixed-nav').next()
                .css('padding-top','0');
                }
        });

});