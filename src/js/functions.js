$(document).ready(function(){


	function hideHeaders() {
		$("#main-header h2, #main-header hr, #main-header h1").addClass("hidden");		
	}
	setTimeout(hideHeaders,2800);

	function flipNinja() {	
		$(".ninja:not(.pos01)").click(function(){

			// $(".main-header").toggleClass("animated01");
			$(".main-header").addClass("animated01");
			$(".ninja").addClass("pos01");
		})
		$("h3").click(function(){
			$(".main-header").addClass("reverse");
			console.log("cacaa");
		});

		$(".ninja.pos01").click(function(){
			$(".main-header").addClass("reverse");
			// console.log("cacaa");
			// alert("cacaa");
		})

		var content = $('.main-header');

		var trigger = $(".ninja").live('click', function() {
			content.removeClass('reverse').addClass('running');
		}, function() {
			content.removeClass('running').addClass('reverse');
		}).trigger('click');

    $(".lobby__item").mouseenter(function(){
    	console.log ("tetsas")
    	$(".mrPacMan").removeClass("hungry");
    });
	
    $(".lobby__item").mouseleave(function(){
    	console.log ("tetsas")
    	$(".mrPacMan").addClass("hungry").fadeOut(600);
    });

    $('#trigger').live('click', function() {
        $(this).toggle(function() {
            $(this).text('hide follow!');
            content.removeClass('reverse').addClass('running');
        }, function() {
             $(this).text('follow me!');
            content.removeClass('running').addClass('reverse');
        }).trigger('click');
    });

	}

	flipNinja();





// function typeEffect(element, speed) {
// 	var text = $(element).text();
// 	$(element).html('');
	
// 	var i = 0;
// 	var timer = setInterval(function() {
// 					if (i < text.length) {
// 						$(element).append(text.charAt(i));
// 						i++;
// 					} else {
// 						clearInterval(timer);
// 					}
// 				}, speed);
// }

//   var speed = 25;
//   var delay = $('#whoIam h2').text().length * speed + speed;
//   typeEffect($('#whoIam h2'), speed);
//   setTimeout(function(){
//     $('#whoIam p').css('display', 'inline-block');
//     typeEffect($('#whoIam p:first-child'), speed);
//     typeEffect($('#whoIam p:nth-child(2)'), speed);
//   }, delay);

	// __________________________________________
	// ##########################################|
	// ############# NEW FUNCTIONS ##############|
	// ##########################################|

    // STICKY HEADER
    // var stickyNavTop = $('.headerContainer').offset().top;   	
   	// var stickyNav = function(){
	//     var scrollTop = $(window).scrollTop();
	//     if (scrollTop > stickyNavTop) { 
	//         $('.headerContainer').addClass('sticky');
	//     } else {
	//         $('.headerContainer').removeClass('sticky'); 
	//     }
	// };
	// stickyNav();
	// $(window).scroll(function() {
	// 	stickyNav();
	// });


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

});