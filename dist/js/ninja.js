	// function flipNinja() {	
	// 	$(".ninja:not(.pos01)").click(function(){

	// 		// $(".mainHeader").toggleClass("animated01");
	// 		$(".mainHeader").addClass("animated01");
	// 		$(".ninja").addClass("pos01");
	// 	})
	// 	$("h3").click(function(){
	// 		$(".mainHeader").addClass("reverse");
	// 		console.log("cacaa");
	// 	});

	// 	// $(".ninja.pos01").click(function(){
	// 	// 	$(".mainHeader").addClass("reverse");
	// 	// 	 	console.log("cacaa");
	// 	// 	 	alert("cacaa");
	// 	// })

	// 	var content = $('.mainHeader');

	// 	// var trigger = $(".ninja").live('click', function() {
	// 	// 	content.removeClass('reverse').addClass('running');
	// 	// }, function() {
	// 	// 	content.removeClass('running').addClass('reverse');
	// 	// }).trigger('click');


	// 	$(".ninja").click(function(){			

	// 		if( !($(".mainHeader").hasClass("running") || $(".mainHeader").hasClass("reverse"))   ) {
	// 			$(".mainHeader").addClass("running");
	// 			console.log("nerea")

	// 		} else {
	// 			console.log("Caca333")
	// 			$('.mainHeader').toggleClass("running reverse");
	// 		}

	// 		// content.removeClass('reverse').addClass('running');
	// 		// content.removeClass('running').addClass('reverse');
	// 	})



	// }

	// flipNinja();
function flipNinja() {
	$(".ninja").click(function(e){
		e.preventDefault();

		$(".mainHeader").toggleClass("animated01");
	})
}
flipNinja();