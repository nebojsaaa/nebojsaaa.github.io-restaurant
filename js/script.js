var dish1 = 0;
var dish2 = 0;
var dish3 = 0;
var dish4 = 0;
var dish5 = 0;

    function count() {
    	if (document.getElementById("dish1").clicked() == true) {
    		dish1 += 1;
    		document.getElementById("dish1").innerHTML = dish1; 
    	}
    	else if (document.getElementById("dish2").click() == true) {
    		dish2 += 1;
    		document.getElementById("dish2").innerHTML = dish2; 
    	}
    	else if (document.getElementById("dish3").click() == true) {
    		dish3 += 1;
    		document.getElementById("dish3").innerHTML = dish3; 
    	}
    	else if (document.getElementById("dish4").click() == true) {
    		dish4 += 1;
    		document.getElementById("dish4").innerHTML = dish4; 
    	}
    	else if (document.getElementById("dish1").click() == true) {
    		dish5 += 1;
    		document.getElementById("dish5").innerHTML = dish5; 
    	}
    };

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