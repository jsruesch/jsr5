
// Animate Menu Toggle Icon
$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
    $('.menu-toggle').toggleClass('active');
  });
});


// Show and Hide Mobile Menu
$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
    $('.mobile-nav-container').toggleClass('mobile-nav-expanded');
  });
});