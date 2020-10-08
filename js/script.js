$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight: true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
	});

	$('.slider-gallery').slick({
		arrows:true,
		dots:true,
		centerMode: true,
  		centerPadding: '60px',
		adaptiveHeight: true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$("a.btn").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
		}, 800);
		return false;
	});


	    
});
