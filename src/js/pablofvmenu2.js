/*
// TODO: Create Class Menu;
*/
let menusContainer = document.querySelector(".mainHeader");
let navMenu = document.querySelector(".mainHeader__menu--nav");
let frontMenu = document.querySelector(".mainHeader__menu--front");
let mobileTriggerBtn = document.querySelector(".menuTrigger");

/*
// ## METHODS:
*/
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

// LAUNCHER
scrollDetection();
mobileTrigger();

$(".frontMenu__circle").click(function(){
    switchMenus();
})