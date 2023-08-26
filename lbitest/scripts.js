// Past Scroll Navigation
$(window).on('scroll', function(){
	var scroll = $(window).scrollTop();    
    if (scroll >= 300) {				
		$(".navigation-container").addClass("navigation-container--navigation-past-scroll");
    } else if(scroll <= 150) {
		$(".navigation-container").removeClass("navigation-container--navigation-past-scroll");
	}
});

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
/*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/
$('.js-anchor-link').click(function(e){
	e.preventDefault();
	var target = $($(this).attr('href'));
	if(target.length){
	  var scrollTo = target.offset().top;
	  $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
	}
  });