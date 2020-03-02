// Acive Nav Link
$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('ul li a').click(function(){ $('li a').removeClass("navactive"); $(this).addClass("navactive"); });
})

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