$(document).ready(function(){

  $('.parent-box').mouseenter(function(){
    $('.box').removeClass("active");
    $(this).children(".box").addClass("active")
  });

  $('.parent-box').click(function(){
    $(this).children(".box").toggleClass("active")
  });

});