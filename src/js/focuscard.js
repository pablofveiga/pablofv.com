// cardsContainer.addEventListener("mouseenter",focusCard);
// cardsContainer.addEventListener("mouseleave",unfocusCard);

let cardsContainer = document.getElementById("home");
cardsContainer.addEventListener("mouseenter", function(e) {
    if(e.target.classList.contains("lobbySection")) {

        document.querySelectorAll("lobbySection").forEach(function(item){
			item.classList.add('NONONONONONO');
		})

        e.target.classList.remove("NONONONONONO");
        e.target.classList.add("CATATTATTATTAATATATAT");
        // console.log(e.target);
    }
},true);

cardsContainer.addEventListener("mouseleave", function(e) {
    if(e.target.classList.contains("lobbySection")) {

    	document.querySelectorAll("lobbySection").forEach(function(item){
			item.classList.remove('NONONONONONO');
		})

        e.target.classList.remove("CATATTATTATTAATATATAT");
        // console.log(e.target);


    }
},true);







function focusCard() {


	let allItems = document.querySelectorAll(".lobbySection");
	allItems.forEach(function(item){
		item.classList.remove('hovered');
	})


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


// WORKING JQUERY VERSION

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


