/*  --------------------------------------------------------------------------- 
        
    Author: Vandré Leal Cândido
    Description: Washington & Jefferson College - CIS Department
    Year: 2014

---------------------------------------------------------------------------  */

$(document).ready(function () {

	// jQuery to change navbar background on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("navbar-bg");
	        $(".arrow").fadeOut(500);
	    } else {
	        $(".navbar-fixed-top").removeClass("navbar-bg");
	        $(".arrow").fadeIn(500);
	    }
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 500, 'jswing');
	        event.preventDefault();
	    });
	});

});