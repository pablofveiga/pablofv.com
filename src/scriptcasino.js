		function orbital_expand_navbar() {
			var element = document.getElementById("search-navbar");

			if (element.classList.contains('expand-searchform')) {
				element.classList.remove("expand-searchform");
				return;
			}else {
				element.classList.add("expand-searchform");
				document.getElementById("search-input").focus();
			}
		}


// EXTENSION PARA CERRAR AL CLICK FUERA
if (document.getElementById("search-navbar").classList.contains('expand-searchform')) {



	window.addEventListener('click', function(e){   
	  if (document.getElementById('search-navbar').contains(e.target)){
	    // Clicked in box
	    console.log("dentro");
	  } else{
	    // Clicked outside the box
	    console.log("fuera");
	    document.getElementById("search-navbar").classList.remove("expand-searchform");					    
	  }
	});

}

document.body.addEventListener("click",cierraBusqueda);

function cierraBusqueda(e) {
	e.preventDefault();

	var element = document.getElementById("");
	if ( !(e.target.classList.contains('expand-searchform')) ) {
		element.classList.remove("expand-searchform");
	}


	// if ( (e.target.classList.contains('expand-searchform')) ) {

	// } else {
	// 	element.classList.remove("expand-searchform");
	// }
}


if ( $("#search-navbar").is(':visible') ) {
	$(document).click(function(e){
		if( $("#search-navbar").hasClass("expand-searchform")) {
			$("#search-navbar").removeClass("expand-searchform")
		}
	})	
}

