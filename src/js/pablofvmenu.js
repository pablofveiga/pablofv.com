let navMenu = document.querySelector(".mainHeader__menu--nav");
let frontMenu = document.querySelector(".mainHeader__menu--front");    

// Methods:
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
function blockBody() {
    $("body").toggleClass("blocked");  
}
function showTrigger() {
    $(".menuTrigger").addClass("visible");
}
function hideTrigger() {
    $(".menuTrigger").removeClass("visible");
}
function mobileTrigger() {
    $(".menuTrigger").click(function(){
        $(".mainHeader").toggleClass("opened","");
        blockBody();
    });
}

var scrollStop = function (callback) {
    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;
    // Setup scrolling variable
    var isScrolling;
    // Listen for scroll events
    window.addEventListener('scroll', function (event) {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            // Run the callback
            callback();
        }, 66);
    }, false);
};
function scrollDetection() {
    let scrollPosition = 0;
    let target = document.querySelector(".mainHeader");

    window.addEventListener('scroll', function(){
        if ((document.body.getBoundingClientRect()).top > scrollPosition) {
            target.setAttribute("data-scroll","up");
            showTrigger();
            // show Nav
            target.classList.remove("rotated");
        } else {
            target.setAttribute("data-scroll","down");
            hideTrigger();
            // hide Nav
            target.classList.add("rotated");
        }
        scrollPosition = (document.body.getBoundingClientRect()).top;
    });
    scrollStop(function(){
        target.setAttribute("data-scroll","stopped");
        // show Nav
    })
}



scrollDetection();
mobileTrigger();

$(".frontMenu__circle").click(function(){
    switchMenus();
})


/*  FROM HERE: All shit */

// $(".mobileMenu").click(function(){
//     $(".mobileMenuOverlay").toggleClass("opened");
//     $(".mobileMenu__trigger").toggleClass("cross");
//     $("body").toggleClass("blocked");
// })







// $(".mainHeader__menu--front, .mainHeader__menu--nav").toggleClass("rotated","");

function closeNavMenu() {   // NOT WORKING PROPERLY
	if (navMenu.classList.contains("rotated")) {
		navMenu.classList.remove("rotated");
	}
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