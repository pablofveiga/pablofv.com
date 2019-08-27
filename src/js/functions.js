$(document).ready(function(){

	// __________________________________________
	// ##########################################|
	// ############# NEW FUNCTIONS ##############|
	// ##########################################|

	// ANIMACION HEADER (DESKTOP)
    // let cn = 0;
    // $(".ninja").click(function(e){
    //     e.preventDefault();
    //     $(".mainHeader").toggleClass("animated01");
    //     $(".mainHeader__bar").toggleClass("barAnimated");
    //    // $(".mainHeader__menu").toggleClass("animated01");
    //     // GRABAR POSICION EN LOCALSTORAGE, PARA PERMANECER EN LA MISMA TRAS REFRESCAR
    //     cn++;
    //     console.log(cn);
    //     return cn;
    //     // al incrementar por 1, podemos incluso filtrar por pares (/2)
    // })

    // STICKY HEADER
    if ($(window).width()>768) {
	    var stickyNavTop = $('.mainHeader').offset().top;   	
	   	var stickyNav = function(){
		    var scrollTop = $(window).scrollTop();
		    if (scrollTop > stickyNavTop) { 
		        $('.mainHeader').addClass('sticky');
		    } else {
		        $('.mainHeader').removeClass('sticky'); 
		    }
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}

	// V2
	// let _header = document.getElementsByClassName("mainHeader");
	// let _headerHeight = _header.getBoundingClientRect().top + window.scrollY


	// RESPONSIVE MENU
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		// downscroll code
		$(".mainHeader").addClass("rotated");		
		if( $(".mobileMenuOverlay").hasClass("opened")  ) {			
		} else {
			$(".mobileMenu").removeClass("visible");
		}		
	} else {
		// upscroll code
		$(".mobileMenu").addClass("visible");
		$(".mainHeader").removeClass("rotated");
	}
	lastScrollTop = st;
	});
	$(".mobileMenu").click(function(){
		$(".mobileMenuOverlay").toggleClass("opened");
		$(".mobileMenu__trigger").toggleClass("cross");
		$("body").toggleClass("blocked");
	})


	// ######### FUNCIONES PARA IMPLEMENTAR
				// PLUGIN PARA MENU:
				/*
				    Pilla estas variables:
				    {
				    Option1: "valor",
				    Option2: "valor",
				    Option_url_imagenes: "../pics/",    // Hacerlo opcional
				    Elementos: [
				            {
				                Orden: 1,
				                Titulo: "titulo 1",
				                Ruta Imagen: "",
				                Subtitulo: "esto es un lorem ipsum",
				                Shape: "egg"    // OPCIONAL (crear clases)
				            },
				            {
				                Orden: 2,
				                Titulo: "titulo 2",
				                Ruta Imagen: "",
				                Subtitulo: "esto es otro lorem ipsum"
				            },
				            {}
				        ]
				    }
				    // en el futuro hacer opciones para colores, y :hover, y personalizar colores en cada elemento

				    Lo renderiza:
				    1º.- En el main menu (aunque no esté visible hasta que le den click al ninja o hagan scroll)    
				    2º.- En la sección de la home
				    3º.- En el menú movil

				*/



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
	});
// }





// PARALLAX
// $("document").ready(function(){
// 	$(window).scroll(function(){
// 		let barra = $(window).scrollTop();
// 		let position = barra * 0.20;	
// 		$("#workExperience").css({
// 			"background-position": "0 "+ position + "px"
// 		});
// 	});
// });


// CAMBIAR A EVENTO DE ESTAR PULSADO, Y SI ESTÁ MÁS DE 3 SEGUNDOS, SE TIRA UN PEDO
$(".centralItem").click(function(e){
	e.preventDefault();
	$(this).toggleClass("clicked");
})



// TEMP : in construction
$(".closeConstruction").click(function(){
	$(".inConstruction").hide();
})
$(".inConstruction").fadeOut(10000);


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




if ($(window).width()>768) {

        card_inv = $(".demo__card-cont");
        card_inv.children().each(function(i, div) {
            card_inv.prepend(div)
        })


}