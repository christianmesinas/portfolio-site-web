
$(function () {
  $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop()> $nav.height());
  });
});
$('.navbar-nav>li>a>').on('click', function(){
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade-in').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1200);

           }

       });

   });

});


if ($('#back-to-top').length) {
var scrollTrigger = 100, // px
    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    };
backToTop();
$(window).on('scroll', function () {
    backToTop();
});
$('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});
}
