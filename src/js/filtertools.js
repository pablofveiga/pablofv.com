
    // sticky filter bar for jobs
 //    var selectBar = $('.jobSelector').offset().top;   	
 //   	var stickySelect = function(){
	//     var scrollTop = $(window).scrollTop();
	//     if (scrollTop > selectBar) { 
	//         $('.jobSelector').addClass('sticky');
	//     } else {
	//         $('.jobSelector').removeClass('sticky'); 
	//     }
	// };
	// stickySelect();
	// $(window).scroll(function() {
	// 	stickySelect();
	// });

    $("#pin").click(function(e){
        e.preventDefault();
        $('.jobSelector').toggleClass('sticky'); 
    })


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

        try {
            $('.jobsContainer').slick("destroy");
        } catch(e) {}

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

        } else {
            console.log("Cacaca");


            $('.jobsContainer').slick("destroy");
            $(".jobsContainer").toggleClass("asc desc");
            // invertOrder();
            inverdOrderDOM();
            $('.jobsContainer').slick({
                dots: true
            }); 


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
