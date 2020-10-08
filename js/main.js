$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 90) {
			$('.totop').show();
		} else {
			$('.totop').hide();
		}
	});
 
	$('.totop').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});

	$("a.menu-item").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
		}, 800);
		return false;
	});
});



