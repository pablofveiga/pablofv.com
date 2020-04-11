// let triggers = $(".lobbyContainer>section");



function navigation(e){
	e.preventDefault();
	if (e.target.hasAttribute("data-link")) {
		console.log("nos sirve");

		let _id = e.target.getAttribute("data-link");
		let _destiny = document.getElementById(_id);
		console.log(_id);

		// scrollIntoView() Not crossbrowser
	}

}


document.body.addEventListener("click",navigation);



	triggers.click(function(event) {
	    // Figure out element to scroll to
	    // var target = $(this).attr("data-link");
	    var _id = $(this).attr("data-link");
	    // var target = document.querySelector(_id)
	    var target = $(_id);
	    if (_id == "spanish") {
	    	window.location="http://es.pablofv.com";
	    	console.log("cacsa");
	    } else if (_id == "english") {
	    	window.location="http://pablofv.com";
	    	console.log("eeeecacsa");
	    } else {
		    // Does a scroll target exist?
		    if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		        	// quit 70 from the sticky header (create filter)
		            // scrollTop: (target.offset().top - 70)
		            scrollTop: (target.offset().top)
		        }, 1000, function() {
		            // Callback after animation
		            // Must change focus!
		            var $target = $(target);
		            $target.focus();
		            if ($target.is(":focus")) { // Checking if the target was focused
		                return false;
		            } else {
		                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
		                $target.focus(); // Set focus again
		            };
		        });
		    }
	    }
	});









































// NAVEGACIÓN DEL LOBBY
// if ($(window).width()>768) {
	let triggers = $(".lobbyContainer>section");
	triggers.click(function(event) {
	    // Figure out element to scroll to
	    // var target = $(this).attr("data-link");
	    var _id = $(this).attr("data-link");
	    // var target = document.querySelector(_id)
	    var target = $(_id);
	    if (_id == "spanish") {
	    	window.location="http://es.pablofv.com";
	    	console.log("cacsa");
	    } else if (_id == "english") {
	    	window.location="http://pablofv.com";
	    	console.log("eeeecacsa");
	    } else {
		    // Does a scroll target exist?
		    if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		        	// quit 70 from the sticky header (create filter)
		            // scrollTop: (target.offset().top - 70)
		            scrollTop: (target.offset().top)
		        }, 1000, function() {
		            // Callback after animation
		            // Must change focus!
		            var $target = $(target);
		            $target.focus();
		            if ($target.is(":focus")) { // Checking if the target was focused
		                return false;
		            } else {
		                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
		                $target.focus(); // Set focus again
		            };
		        });
		    }
	    }
	});
// }

