// main.js

$(function(){
  $('header > .depth1 > li').hover(
    function(){
      $(this)
        .find('.depth2')
        .stop().slideDown(250);
    },
    function(){
      $(this)
      .find('.depth2')
      .stop().slideUp(250);
    }
  )
});