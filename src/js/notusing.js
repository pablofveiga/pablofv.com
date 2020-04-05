$(document).ready(function(){

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

