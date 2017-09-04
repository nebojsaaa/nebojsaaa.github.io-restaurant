/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$( document ).ready(function() {


	$("#menu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-menu").offset().top
	    }, 900);
	});

	$("#dish").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-dish").offset().top
	    }, 900);
	});

	$("#about").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-about").offset().top
	    }, 900);
	});

	$("#gallery").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-gallery").offset().top
	    }, 900);
	});

	$("#btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("body").offset().top
	    }, 900);
	});


	$("#side-menu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-menu").offset().top
	    }, 900);
	});

	$("#side-dish").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-dish").offset().top
	    }, 900);
	});

	$("#side-about").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-about").offset().top
	    }, 900);
	});

	$("#side-gallery").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#sec-gallery").offset().top
	    }, 900);
	});


	$('.slider').slick({
		dots: true,
	    infinite: true,
	    autoplay: true,
	    autoplaySpeed: 3000
	});

	$('.featured-container').slick({
		dots: true,
	    infinite: true,
	    autoplay: true,
	    slidesToShow: 1,
		rows:1,
		slidesPerRow: 1,
    	responsive: [{ 
        breakpoint: 600,
        settings: {
            arrows: true,
            infinite: false,
            rows:1,
  			slidesPerRow: 1,
            slidesToShow: 1
        }}],
	    autoplaySpeed: 5000
	});

	var $modal = $('#myModal');
	var $btn = $('#open');
	var $close = $('.close');

	$btn.on('click', function() {
		$modal.css('display', 'block');
	});

	$close.on('click', function() {
		$modal.css('display', 'none');
	});

});