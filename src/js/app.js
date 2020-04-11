// ##########################################|
// ############# NEW FUNCTIONS ##############|
// ##########################################|

// ### MOBILE ONLY
	// peibolTinder()
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


// ### DESKTOP ONLY
	// focusCard() - jquery
	// beeCursor()


	// focusCard() - jquery
function focusCard() {
    $(".lobbySection").removeClass("hovered");
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
	// beeCursor()
function beeCursor() {
    $(".honeycomb__cell").on("mousedown mouseup", function(e) {
    	$(this).toggleClass("clicked");
	});
}


// ### MOBILE & DESKTOP
	// navigation() navegación del Lobby 
	// filterTools()  Filter TOOLS (jquery locura)
	// sendForm()    Formulario
	// invertItemsWhoIam()    WHO I AM (invert items)
	// Header and Menu Functions


	// navigation() navegación del Lobby 
function navigation() {
	let triggers = $(".lobbyContainer>section, .navMenu__list__item__link");
	triggers.click(function(event) {
	    var _id = $(this).attr("data-link");
	    var target = $(_id);
	    if (_id == "spanish") {
	    	window.location="http://es.pablofv.com";
	    	console.log("cacsa");
	    } else if (_id == "english") {
	    	window.location="http://pablofv.com";
	    	console.log("eeeecacsa");
	    } else {
		    if (target.length) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: (target.offset().top)
		        }, 1000, function() {
		            var $target = $(target);
		            $target.focus();
		            if ($target.is(":focus")) {
		                return false;
		            } else {
		                $target.attr('tabindex', '-1');
		                $target.focus();
		            };
		        });
		    }
		    document.querySelector(".menuTrigger").classList.remove("cross");
	    }
	    document.body.classList.remove("blocked");
	    document.querySelector(".mainHeader").classList.remove("opened");
	});	
}
	// Filter TOOLS (jquery locura)
function filterTools() {
	if ($(window).width()<768) {
	    $("#scrollH").addClass("active");
	} else {
	    $("#expand").addClass("active");
	}
	
	// ORDER CTA
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
	// SCROLLED CTA
	$("#scrollV").click(function(e) {
	    e.preventDefault();
	    if ($(".scrollH").hasClass("active")) {
	        console.log("el otro está activo");
	        $(".scrollH").removeClass("active");
	        $('.jobsContainer').slick("destroy");
	    }
	    $(this).toggleClass("active");
	    $(".jobsContainer").toggleClass("scrolledV");
	    $('.jobsContainer').slick("destroy");
	});
	// SLIDER CTA
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
	// TRIGGER CTA
	$(".settingsTrigger").click(function(e) {
	    e.preventDefault();
	    $(".jobSelector__controls").toggleClass("active");
	    $(this).toggleClass("active");
	});
	$(".settingsTrigger:not(.active)").hover(function() {
	    $(this).toggleClass("hovered");
	});
}
	// sendForm()    Formulario
function sendForm() {
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
}
	// invertItemsWhoIam()    WHO I AM (invert items)
function invertItemsWhoIam(){
    card_inv = $(".whoIamGame__item-cont");
    card_inv.children().each(function(i, div) {
        card_inv.prepend(div)
    })
}
	// peibolMenu()    Header and Menu Functions
function peibolMenu() {
	let menusContainer = document.querySelector(".mainHeader");
	let navMenu = document.querySelector(".mainHeader__menu--nav");
	let frontMenu = document.querySelector(".mainHeader__menu--front");
	let mobileTriggerBtn = document.querySelector(".menuTrigger");

	// SHOW FRONT
	function showNavMenu() {
	    if (menusContainer.classList.contains("rotated")) {
	        menusContainer.classList.remove("rotated");
	    
	        if (!(frontMenu.classList.contains("rotated"))) {
	            frontMenu.classList.add("rotated");
	            navMenu.classList.remove("rotated");
	        }
	    } 
	    // IF CONTAINER IS NOT ROTATED (VISIBLE) Y FRONT visible
	    else if (!(frontMenu.classList.contains("rotated"))) {
	        switchMenus();
	    }    
	}
	// SHOW NAV
	function showFrontMenu() {
	    if (menusContainer.classList.contains("rotated")) {
	        menusContainer.classList.remove("rotated");

	        if (!(navMenu.classList.contains("rotated"))) {
	            navMenu.classList.add("rotated");
	            frontMenu.classList.remove("rotated");
	        }
	    } 
	    else if (!(navMenu.classList.contains("rotated"))) {
	        switchMenus();        
	    }
	}
	// SWITCH FRONT/NAV MENUS
	function switchMenus(){ 
	    // CHECK FRONT STATUS
	    if (frontMenu.classList.contains("rotated")) {
	        frontMenu.classList.remove("rotated");
	        setTimeout(function(){ 
	            navMenu.classList.add("rotated");           
	        }, 800);
	    } else {
	        frontMenu.classList.add("rotated");
	        setTimeout(function(){ 
	            navMenu.classList.remove("rotated");
	        }, 800);
	    }
	    // CHECK NAV STATUS
	    if (navMenu.classList.contains("rotated")) {
	        navMenu.classList.remove("rotated");
	        setTimeout(function(){ 
	            frontMenu.classList.add("rotated");         
	        }, 800);
	    } else {
	        navMenu.classList.add("rotated");
	        setTimeout(function(){ 
	            frontMenu.classList.remove("rotated");
	        }, 800);
	    }
	}
	// SCROLL TO TOP 
	function scrollToTop(scrollDuration) {
	    var scrollStep = -window.scrollY / (scrollDuration / 15),
	        scrollInterval = setInterval(function(){
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval); 
	    },15);
	}
	// DETECT LOBBY VISIBILITY ON WINDOW
	window.addEventListener("scroll",function(){
	    let actualScroll = window.pageYOffset;
	    let mainFrameHeight = document.querySelector(".introSection").offsetHeight;

	    if ( actualScroll > mainFrameHeight ) {
	        menusContainer.classList.remove("onViewport");
	        if (menusContainer.getAttribute("data-scroll") == "up") {
	            showNavMenu();
	        }
	    }
	    else {
	        menusContainer.classList.add("onViewport");
	        if (menusContainer.getAttribute("data-scroll") == "up") {
	            showFrontMenu();
	        }
	    }
	})
	// LOCK/UNLOCK BODY (1,0)
	function blockBody(state) {
	    if (state == 1) {
	        document.querySelector("body").classList.add("blocked");
	    } 
	    else if (state == 0) {
	        document.querySelector("body").classList.remove("blocked");
	    }
	}
	// SHOW/HIDE MOBILE TRIGGER (1,0)
	function showTrigger(status){
	    if (status == 1) {
	        document.querySelector(".menuTrigger").classList.add("visible");
	        mobileTriggerBtn.classList.remove("clicked");
	    } else if (status == 0) {
	        document.querySelector(".menuTrigger").classList.remove("visible");
	    }
	}
	// TRIGGER BEHAVIOUR
	function mobileTrigger() {
	    let mobileBreakpoint = 991;
	    let trigger = document.getElementById("menuTrigger");

	    trigger.addEventListener("click",function(){
	        if (window.outerWidth < 991) {
	            menusContainer.classList.toggle("opened");
	            trigger.classList.toggle("cross");

	            if (menusContainer.classList.contains("opened")) {
	            	console.log("estado 1"); // abriendo
	            	document.body.classList.add("blocked");

	            } else {
	            	console.log("estado 2"); // cerrando
	            	menusContainer.classList.remove("opened");
	            	document.body.classList.remove("blocked");
	            }


	        } else {
	            if (!(menusContainer.classList.contains("rotated"))) {
	                switchMenus();
	            } else {
	                showNavMenu();
	            }
	        }
	    });
	    trigger.addEventListener("dblclick",function(){
	        scrollToTop(500);
	    });
	}
	// DATA-SCROLL FUNCTION
	var scrollStop = function (callback) {
	    if (!callback || typeof callback !== 'function') return;
	    var isScrolling;
	    window.addEventListener('scroll', function (event) {
	        window.clearTimeout(isScrolling);
	        isScrolling = setTimeout(function() {
	            callback();
	        }, 800);
	    }, false);
	};
	function scrollDetection() {
	    let scrollPosition = 0;
	    window.addEventListener('scroll', function(){
	        if ((document.body.getBoundingClientRect()).top > scrollPosition) {
	            menusContainer.setAttribute("data-scroll","up");
	            showTrigger(1);
	            menusContainer.classList.remove("rotated");
	        } else {
	            menusContainer.setAttribute("data-scroll","down");
	            showTrigger(0);
	            menusContainer.classList.add("rotated");
	        }
	        scrollPosition = (document.body.getBoundingClientRect()).top;
	    });

	    scrollStop(function(){
	        menusContainer.setAttribute("data-scroll","stopped");
	    })
	}
	$(".frontMenu__circle").click(function(){
	    switchMenus();
	})

	// LAUNCHER
	scrollDetection();
	mobileTrigger();

}

// ##### APP LAUNCHER
// ## MOBILE ONLY FUNCTIONS - LAUNCHER
$(document).ready(function() {

	navigation();
	filterTools();
	sendForm();
	peibolMenu();

    if ($(window).width() < 991) {
        peibolTinder();
		// invertItemsWhoIam();

    } else {
    	beeCursor();
    	focusCard();
    }
});