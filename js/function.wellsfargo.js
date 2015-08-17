$(document).ready(function() {
	function toggleNavbarMethod() {
		if ($(window).width() > 768) {
			$('.navbar .dropdown').on('mouseover', function(){
				$('.dropdown-toggle', this).trigger('click'); 
			}).on('mouseout', function(){
				$('.dropdown-toggle', this).trigger('click').blur();
			});
		}
		else {
			$('.navbar .dropdown').off('mouseover').off('mouseout');
		}
	}
	
	$('[data-toggle="tooltip"]').tooltip();
	$("[data-toggle=tooltip]").hover(function(){
	$('.tooltip.bottom').css('top',parseInt($('.tooltip.bottom').css('top')) + 8 + 'px')
});
	$('[data-toggle="popover"]').popover();   
	 // toggle navbar hover
		toggleNavbarMethod();
		
		//var maxSlides = 4;
	//if ($('ul.bxslider').width() < 769) {
			//maxSlides = 3;
//}
	//if ($('ul.bxslider').width() <480) maxSlides = 2;
	// don’t download complicated script
	// use low-source images instead of full-source ones
	
	$('.bxslider').bxSlider({
	  minSlides: 2,
	  maxSlides: 2,
	  slideWidth: 230,
	  slideMargin: 8
	});

	
	$(function() {
        var $slides = $('#slides');
  
        Hammer($slides[0]).on("swipeleft", function(e) {
          $slides.data('superslides').animate('next');
        });
  
        Hammer($slides[0]).on("swiperight", function(e) {
          $slides.data('superslides').animate('prev');
        });
  
        $slides.superslides({
          hashchange: true
        });
      });
	  $('#slides').superslides({
	  inherit_height_from: '#hero',
	  inherit_width_from: '#hero'
	  })
	  
	 $("select").selectBoxIt({

    // Set a custom down arrow icon by adding new CSS class(s)
    //downArrowIcon: "icon-hand-down"

  });

});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});