$(document).ready(function(){


	// function hideHeaders() {
	// 	$("#main-header h2, #main-header hr, #main-header h1").addClass("hidden");		
	// }

	// setTimeout(hideHeaders,2800);

//	function flipNinja() {
	
		$(".ninja:not(.pos01)").click(function(){

			// $(".main-header").toggleClass("animated01");
			$(".main-header").addClass("animated01");
			$(".ninja").addClass("pos01");
		})


		$("h3").click(function(){
			$(".main-header").addClass("reverse");
			console.log("cacaa");
		});

		// $(".ninja.pos01").click(function(){
		// 	$(".main-header").addClass("reverse");
		// 	console.log("cacaa");
		// 	alert("cacaa");
		// })


  //   var content = $('.main-header');

  //   var trigger = $(".ninja").live('click', function() {
  //   	content.removeClass('reverse').addClass('running');
  //   }, function() {
		// content.removeClass('running').addClass('reverse');
  //   }).trigger('click');

    $(".lobby__item").mouseenter(function(){
    	console.log ("tetsas")
    	$(".mrPacMan").removeClass("hungry");
    });
	
    $(".lobby__item").mouseleave(function(){
    	console.log ("tetsas")
    	$(".mrPacMan").addClass("hungry").fadeOut(600);
    });


    // $('#trigger').live('click', function() {
    //     $(this).toggle(function() {
    //         $(this).text('hide follow!');
    //         content.removeClass('reverse').addClass('running');
    //     }, function() {
    //          $(this).text('follow me!');
    //         content.removeClass('running').addClass('reverse');
    //     }).trigger('click');
    // });
	




//	}

//	flipNinja();

});