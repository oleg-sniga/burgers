$(document).ready(function() {

  $('.hamburger-menu__btn').on('click',function(){
    $('.full-window').slideToggle();
  });
  $('.full__close').on('click', function(){
    $('.full-window').slideToggle();
  });
});
