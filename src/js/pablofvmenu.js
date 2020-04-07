let navMenu = document.querySelector(".mainHeader__menu--nav");
let frontMenu = document.querySelector(".mainHeader__menu--front");    





// Methods:
function switchMenus(){
	// if (navMenu.classList.contains("rotated")) {
	// 	navMenu.classList.remove("rotated");
	// 	frontMenu.classList.add("rotated");
	// } else {
	// 	navMenu.classList.add("rotated");
	// 	frontMenu.classList.remove("rotated");
	// }

	$(".mainHeader__menu--nav, .mainHeader__menu--front").toggleClass("rotated");
}

function closeMenus() {
	let menuPosition;
	if ($(".mainHeader__menu--nav").hasClass("rotated")) {
		console.log("caca");
		menuPosition = 1;
		$(".mainHeader__menu--front").addClass("rotated");
	} else {
		console.log("culoM");
		menuPosition = 2;
		$(".mainHeader__menu--front").removeClass("rotated");
		$(".mainHeader__menu--nav").addClass("rotated");
	}

	// $(".mainHeader__menu--nav").toggleClass("rotated","");
	// $(".mainHeader__menu--front").toggleClass("rotated","");

	// if ( frontMenu.classList.contains("rotated") ) {
	// 	frontMenu.classList.remove("rotated");
	// }
	// if ( !(navMenu.classList.contains("rotated")) ) {
	// 	navMenu.classList.add("rotated");
	// }
	
}


function turnBlock(menu,status) {

    function showNavMenu() {
        // CHECK IF F.M. IS VISIBLE, THEN HIDE IT
        if (frontMenu.classList.contains("visible") ) {
            frontMenu.classList.remove("visible");
        }
        // CHECK IF N.M. IS NOT VISIBLE, THEN SHOW IT
        if (  (navMenu.classList.contains("visible") == false )  ) {
            navMenu.classList.add("visible");
        }
    }
    function hideNavMenu() {
        // CHECK IF N.M. IS VISIBLE, THEN HIDE IT
        if ((navMenu.classList.contains("visible"))) {
            navMenu.classList.remove("visible");
        }
        // CHECK IF F.M. IS NOT VISIBLE, THEN SHOW IT
        if (!(frontMenu.classList.contains("visible")) ) {
            frontMenu.classList.add("visible");
        }
    }
    function showFrontMenu() {
        // CHECK IF N.M. IS VISIBLE, THEN HIDE IT
        if (navMenu.classList.contains("visible")) {
            navMenu.classList.remove("visible");
        }
        // CHECK IF F.M. IS NOT VISIBLE, THEN SHOW IT
        if (!(frontMenu.classList.contains("visible")) ) {
            frontMenu.classList.add("visible");
        }
    }
    function hideFrontMenu() {
        // CHECK IF F.M. IS VISIBLE, THEN HIDE IT
        if (frontMenu.classList.contains("visible") ) {
            frontMenu.classList.remove("visible");
        }
        // CHECK IF N.M. IS NOT VISIBLE, THEN SHOW IT
        if (!(navMenu.classList.contains("visible"))) {
            navMenu.classList.add("visible");
        }
    }

    switch(menu) {
        case navMenu: 
            if (status == true) {
                showNavMenu();
            } else {
                hideNavMenu();
            }
            break;       

        case frontMenu:
            if (status == true) {
                showFrontMenu();
            } else {
                hideFrontMenu();
            }
            break;
        
        default: 
            break;
    }
}    
// turnBlock(frontMenu,false);


$(".mainHeader__menu--front, .mainHeader__menu--nav").toggleClass("rotated","");
// NINJA.click(function(){
		// Mostrar Nav Menu
// })



// let stickyConverter = function() {
//     const stickyElement = document.querySelector(".site-header ");
//     const headerHeight = stickyElement.offsetHeight;
//     const mobileViewport = 414;
//     if (window.innerWidth > mobileViewport) {
//         let scrollTop = window.scrollY;
//         if (scrollTop > headerHeight) {
//             stickyElement.classList.add("casinosticky");
//         } else {
//             stickyElement.classList.remove("casinosticky");
//         }    
//     }
// }
// window.addEventListener("scroll", stickyConverter);    

// function hideFrontMenu(){}
// function showFrontMenu() {}

// function hideNavMenu(){}

// function stickyMenu() {}


function menu() {

// SI ES DESKTOP: 
// 	--> Mobile Trigger --> {
// 			Lanza Nav Menu
// 			Esconder Mostrar otros menus
// 		}

// 	SCROLL:
	
// 		-- SCROLL DOWN: 
// 				--> hacerSticky()
// 				--> esconderFrontMenu()

// 				IF (NAVMENU Visible) --> esconderNavMenu().delay(2s) (CSS)
		
// 		-- SCROLL UP:
// 				--> mostrarNavMenu()


// SI ES MOBILE
// 	--> Esconder	Menus,
// 	--> NavMenu --> CSS para encajar en Menu Movil
// 	--> Hacer un prependTo si es preciso			
	
}