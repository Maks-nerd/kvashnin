$(document).ready(function(){

  (function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);

	$('.order').click(function(){
    $('.b-popap').fadeIn(700); return false;
  });
    $('.close').click(function(){
    $('.b-popap').fadeOut(700); return false;
  });
   $('.b-popap').click(function(e){
      if (e.target != this)
         return;
      $(".b-popap").fadeOut(700); return false;
   });

   	$('.order2').click(function(){
    $('.b-popap2').fadeIn(700); return false;
  });
    $('.close2').click(function(){
    $('.b-popap2').fadeOut(700); return false;
  });
   $('.b-popap2').click(function(e){
      if (e.target != this)
         return;
      $(".b-popap2").fadeOut(700); return false;
   });

        $('.order3').click(function(){
    $('.b-popap3').fadeIn(700); return false;
  });
    $('.close3').click(function(){
    $('.b-popap3').fadeOut(700); return false;
  });
   $('.b-popap3').click(function(e){
      if (e.target != this)
         return;
      $(".b-popap3").fadeOut(700); return false;
   });

   var tabs = $('#tabs');
  $('.tabs-content > div').hide();
  $('.tabs a').click(function() {
    var tabId = $(this).attr('href');
    $('.tabs a').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content > div').hide();
    $(tabId).show();
    //return false;
  });
  $('.tabs a').eq(0).click();

$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
// return false;


  $('.more2').click(function() {
    console.log( $(this).parent().attr('href') )

    if ( $(this).parent().attr('href') != undefined ) {
      $( $(this).parent().attr('href') ).find('.more2').hide();

      $( $(this).parent().attr('href') ).find('.text5').addClass('all');

      $(this).hide();
    } else {
      console.log( $(this).parent().attr('id') );
      $( 'a[href$=#' + $(this).parent().attr('id') + ']' ).find('.more2').hide();
      $(this).hide();
      $(this).parent().find('.text5').addClass('all');
    }   

  });

  $('.lines').click(function(){
    $(".menu2").toggle(500);
});

  });