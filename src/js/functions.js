$(document).ready(function(){

	// __________________________________________
	// ##########################################|
	// ############# NEW FUNCTIONS ##############|
	// ##########################################|

	// ANIMACION HEADER (DESKTOP)
    let cn = 0;
    $(".ninja").click(function(e){
        e.preventDefault();
        $(".mainHeader").toggleClass("animated01");
        $(".mainHeader__bar").toggleClass("barAnimated");
       // $(".mainHeader__menu").toggleClass("animated01");
        // GRABAR POSICION EN LOCALSTORAGE, PARA PERMANECER EN LA MISMA TRAS REFRESCAR
        cn++;
        console.log(cn);
        return cn;
        // al incrementar por 1, podemos incluso filtrar por pares (/2)
    })

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


// FILTER TOOLS 3.0

// $("#pin").click(function(e){
//     e.preventDefault();
//     $('.jobSelector').toggleClass('sticky'); 
// })

    $("#collapse").click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");

        if( $(".jobsContainer").hasClass("collapsed") ) {
            console.log("expandido")
            $("#asc, #scrollV, #scrollH").fadeIn(500);
        } else {
            console.log("colapsado")
            $("#asc, #scrollV, #scrollH").fadeOut(500);
            // change background (with adding class)
        }

        $(".jobsContainer").toggleClass("collapsed");

    })


    // ORDEN
    let _jobs = document.querySelectorAll(".jobsContainer__item");

    // asignarles "data-order='01'" 
    for (i=0; i<_jobs.length; i++) {
        let _val = i+1;
        if (_val <10) {
            _val = "0"+_val;
        }
        _jobs[i].setAttribute("data-order",_val);
    }

    // contar el número de objetos, en este caso 11;
    let _total = _jobs.length;

    // ASCENDENTE o desc
    $("#asc").click(function(e){
        e.preventDefault();

        // try {
        //     $('.jobsContainer').slick("destroy");
        // } catch(e) {}

        function invertOrder() {
            for (i=0; i<_jobs.length; i++) {
                let _or = _total+1 - _jobs[i].getAttribute("data-order");
                _jobs[i].setAttribute("data-order", _or);
                _jobs[i].style.order = _or;
            }            
        }
        function inverdOrderDOM() {
            _cont = $(".jobsContainer");
            _cont.children().each(function(i,div){
                _cont.prepend(div)
            })
        }
        $(this).toggleClass("active");
        // $(".jobsContainer").toggleClass("asc desc");


        if ($(".jobsContainer").hasClass("slick-slider")) {
            console.log("pepepepe");
            $('.jobsContainer').slick("destroy");

            $(".jobsContainer").toggleClass("asc desc");
            inverdOrderDOM();
            $('.jobsContainer').slick({
                dots: true
            }); 

        } else {
            console.log("Cacaca");


            // $('.jobsContainer').slick("destroy");
            $(".jobsContainer").toggleClass("asc desc");
            // invertOrder();
            inverdOrderDOM();
            // $('.jobsContainer').slick({
            //     dots: true
            // }); 


            // invertOrder();
            // $(".jobsContainer").toggleClass("asc desc");
        }


    });



    // SCROLLED
        // Add event listener on click and delegate over the classes (change that id thing)
    $("#scrollV").click(function(e){
        e.preventDefault();   
        
        // // let flag = "active";

        if( $(".scrollH").hasClass("active")  ) {
            console.log("el otro está activo");
            $(".scrollH").removeClass("active");
            $('.jobsContainer').slick("destroy")

        } else {
            console.log("no habia nada apretao");
        }

        $(this).toggleClass("active");
        $(".jobsContainer").toggleClass("scrolledV");
        
            $('.jobsContainer').slick("destroy");
    });





    $("#scrollH").click(function(e){
        e.preventDefault();

        // if( $(".scrollV").hasClass("active")  ) {
        //     console.log("el otro está activo");
        //     $(".scrollV").removeClass("active");
        // } else {
        //     console.log("no habia nada apretao");
        // }

        // $(this).toggleClass("active");
        // $(".jobsContainer").toggleClass("scrolledH");

        // // scrolling mouse wheel horizontal
        // $(".jobsContainer.scrolledH").mousewheel(function(event, delta) {
        //     this.scrollLeft -= (delta * 30);
        //     event.preventDefault();
        // });

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


    $(".settingsTrigger").click(function(e){
        e.preventDefault();
        $(".jobSelector__controls").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".settingsTrigger:not(.active)").hover(function(){
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
            console.log("error nombre");
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            console.log("error mail");
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            console.log("error mensaje");
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
