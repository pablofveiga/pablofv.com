/*
    This file is a total disaster, as result of newest and newest versions
    of the website, and not having much time for work on it

    As soon as I can I will be updating the functions

*/


$(document).ready(function(){

	// __________________________________________
	// ##########################################|
	// ############# NEW FUNCTIONS ##############|
	// ##########################################|



    // STICKY header -> TODO: Convert to IIFE
 //    if ($(window).width()>768) {
	//     var stickyNavTop = $('.mainHeader').offset().top;   	
	//    	var stickyNav = function(){
	// 	    var scrollTop = $(window).scrollTop();
	// 	    if (scrollTop > stickyNavTop) { 
	// 	        $('.mainHeader').addClass('sticky');
	// 	    } else {
	// 	        $('.mainHeader').removeClass('sticky'); 
	// 	    }
	// 	};
	// 	stickyNav();
	// 	$(window).scroll(function() {
	// 		stickyNav();
	// 	});
	// }


	// RESPONSIVE MENU
	// var lastScrollTop = 0;
	// $(window).scroll(function(event){
	// 	var st = $(this).scrollTop();
	// 	if (st > lastScrollTop){
	// 		// downscroll code
	// 		$(".mainHeader").addClass("rotated");		
	// 		if( $(".mobileMenuOverlay").hasClass("opened")  ) {			
	// 		} else {
	// 			$(".mobileMenu").removeClass("visible");
	// 		}		
	// 	} else {
	// 		// upscroll code
	// 		$(".mobileMenu").addClass("visible");
	// 		$(".mainHeader").removeClass("rotated");
	// 	}
	// 	lastScrollTop = st;
	// });
	// $(".mobileMenu").click(function(){
	// 	$(".mobileMenuOverlay").toggleClass("opened");
	// 	$(".mobileMenu__trigger").toggleClass("cross");
	// 	$("body").toggleClass("blocked");
	// })

});


// FUNCIONES QUE HAY QUE CAMBIAR A ES6


// FUNCION PARA CREAR CLASES Y ESTILOS EN EL LOBBY
// if ($(window).width()>768) {
	function focusCard() {
	    // let _sections = document.getElementsByClassName("lobbySection");
	    $(".lobbySection").removeClass("hovered");
	    // $(".lobbySection").addClass("notHovered");
	    $(".lobbySection").mouseenter(function(){
	        $(".lobbySection").addClass("notHovered");
	        $(this).removeClass("notHovered");
	        $(this).addClass("hovered");
	    })
	    $(".lobbySection").mouseleave(function(){
	        $(".lobbySection").removeClass("notHovered");
	        $(this).removeClass("hovered");
	    })
	}
	focusCard();
// }

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




// // FILTER TOOLS 3.0
/* TODO
    1.- Change to ES6 delegate
    2.- Use coherent classes or id's
    3.- Clean that mesh
*/

// SET ORIGINAL POINT
if ($(window).width()<768) {
    $("#scrollH").addClass("active");
} else {
    $("#expand").addClass("active");
}
// FILTER TOOLS 3.0
// ORDEN
$("#asc").click(function(e) {
    e.preventDefault();
    function inverdOrderDOM() {
        _cont = $(".jobsContainer");
        _cont.children().each(function(i, div) {
            _cont.prepend(div)
        })
    }
    $(this).toggleClass("active");
    if ($(".jobsContainer").hasClass("slick-slider")) {
        $('.jobsContainer').slick("destroy");
        $(".jobsContainer").toggleClass("asc desc");
        inverdOrderDOM();
        $('.jobsContainer').slick({
            dots: true
        });
    } else {
        $(".jobsContainer").toggleClass("asc desc");
        inverdOrderDOM();
    }
});
// SCROLLED BUTTON
$("#scrollV").click(function(e) {
    e.preventDefault();
    if ($(".scrollH").hasClass("active")) {
        console.log("el otro está activo");
        $(".scrollH").removeClass("active");
        $('.jobsContainer').slick("destroy");
    } else {
        // console.log("no habia nada apretao");
    }

    $(this).toggleClass("active");

    $(".jobsContainer").toggleClass("scrolledV");
    $('.jobsContainer').slick("destroy");
});
// SLIDER BUTTON
$("#scrollH").click(function(e) {
    e.preventDefault();
    $("#expand").removeClass("active");


    if ($("#scrollV").hasClass("active")) {
        $("#scrollV").removeClass("active")
        $(".jobsContainer").toggleClass("scrolledV");
    }

    if ($(this).hasClass("active")) {

        $(this).removeClass("active")
        $('.jobsContainer').slick("destroy")

    } else {
        $(this).addClass("active")
        $('.jobsContainer').slick({
            dots: true
        });
    }
});
// TRIGGER
$(".settingsTrigger").click(function(e) {
    e.preventDefault();
    $(".jobSelector__controls").toggleClass("active");
    $(this).toggleClass("active");
});

$(".settingsTrigger:not(.active)").hover(function() {
    $(this).toggleClass("hovered");
});


// SKILL LIST
$(".skillsList li").dblclick(function(){
	$(this).toggleClass("clicked");
})



// FORMULARIO
$(".boton_envio").click(function(e) {
    e.preventDefault();

    var nombre = $(".nombre").val();
        email = $(".email").val();
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        mensaje = $(".mensaje").val();

    if (nombre == "") {
        $(".nombre").focus();
        $(".nombre").parent().prepend("<span class='inputError'>Please type a valid name</span>");
        $(".inputError").fadeOut(3000);        
        return false;
    }else if(email == "" || !validacion_email.test(email)){
        $(".email").focus();    
        $(".email").parent().prepend("<span class='inputError'>Please type a valid email</span>");
        $(".inputError").fadeOut(3000);
        return false;
    }else if(mensaje == ""){
        $(".mensaje").focus();        
        $(".mensaje").parent().prepend("<span class='inputError msgError'>Please write something</span>");
        $(".inputError").fadeOut(3000);
        return false;
    }else{
        $('.ajaxgif').removeClass('hide');
        var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje;
        $.ajax({
            type: "POST",
            url: "proceso.php",
            data: datos,
            success: function() {
                $('.ajaxgif').hide();
                $('.msg').text('Message sent!').addClass('msg_ok').fadeOut(5000);  
                $(".sentMsg").addClass("visible");
            },
            error: function() {
                $('.ajaxgif').hide();
                $('.msg').text('Something went wrong...').addClass('msg_error').fadeOut(5000);
            }
        });
        document.getElementById("form").reset();
        return false;
    }

});



// INVERT "WHO I AM" ITEMS ORDER
function invertItemsWhoIam(){
    card_inv = $(".whoIamGame__item-cont");
    card_inv.children().each(function(i, div) {
        card_inv.prepend(div)
    })
}


// ## MOBILE ONLY FUNCTIONS - functions list
function peibolTinder() {
    var animating = false;
    var cardsCounter = 0;
    var numOfCards = 7;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $card, $cardReject, $cardLike;

    function pullChange() {
        animating = true;
        deg = pullDeltaX / 10;
        $card.css("transform", "translateX(" + pullDeltaX + "px) rotate(" + deg + "deg)");

        var opacity = pullDeltaX / 100;
        var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
        var likeOpacity = (opacity <= 0) ? 0 : opacity;
        $cardReject.css("opacity", rejectOpacity);
        $cardLike.css("opacity", likeOpacity);
    };

    function release() {      

        if (pullDeltaX >= decisionVal) {
            $card.addClass("to-right");
        } else if (pullDeltaX <= -decisionVal) {
            $card.addClass("to-left");
        }

        if (Math.abs(pullDeltaX) >= decisionVal) {
            $card.addClass("inactive");

            setTimeout(function() {
                $card.addClass("below").removeClass("inactive to-left to-right");
                cardsCounter++;
                if (cardsCounter === numOfCards) {
                    cardsCounter = 0;
                    $(".whoIamGame__item").removeClass("below");
                }
            }, 300);
        }

        if (Math.abs(pullDeltaX) < decisionVal) {
            $card.addClass("reset");
        }

        setTimeout(function() {
            $card.attr("style", "").removeClass("reset")
                .find(".whoIamGame__item__choice").attr("style", "");

            pullDeltaX = 0;
            animating = false;
        }, 300);
    };

    $(document).on("mousedown touchstart", ".whoIamGame__item:not(.inactive)", function(e) {
        if (animating) return;

        $card = $(this);
        $cardReject = $(".whoIamGame__item__choice.m--reject", $card);
        $cardLike = $(".whoIamGame__item__choice.m--like", $card);
        var startX = e.pageX || e.originalEvent.touches[0].pageX;

        $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            pullDeltaX = (x - startX);
            if (!pullDeltaX) return;
            pullChange();
        });

        $(document).on("mouseup touchend", function() {
            $(document).off("mousemove touchmove mouseup touchend");
            if (!pullDeltaX) return; // prevents from rapid click events
            release();
        });
    });
}

// ## MOBILE ONLY FUNCTIONS - LAUNCHER
$(document).ready(function() {
    if ($(window).width() < 768) {
        peibolTinder()

    }
});

// DESKTOP ONLY FUNCTIONS - functions list
function beeCursor() {
    $(".honeycomb__cell").on("mousedown mouseup", function(e) {
    	$(this).toggleClass("clicked");
	});
}
// DESKTOP ONLY FUNCTIONS - LAUNCHER
if ($(window).width()>768) {
	invertItemsWhoIam();
	beeCursor();
}