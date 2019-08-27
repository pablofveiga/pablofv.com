/* TODO
    1.- Change to ES6 delegate
    2.- Use coherent classes or id's
    3.- Clean that mesh
*/

// SET ORIGINAL POINT
if ($(window).width()<768) {
    $("#scrollH").addClass("active");
} else {
    $("#expand").addClass("active");
}
// FILTER TOOLS 3.0
// ORDEN
$("#asc").click(function(e) {
    e.preventDefault();
    function inverdOrderDOM() {
        _cont = $(".jobsContainer");
        _cont.children().each(function(i, div) {
            _cont.prepend(div)
        })
    }
    $(this).toggleClass("active");
    if ($(".jobsContainer").hasClass("slick-slider")) {
        $('.jobsContainer').slick("destroy");
        $(".jobsContainer").toggleClass("asc desc");
        inverdOrderDOM();
        $('.jobsContainer').slick({
            dots: true
        });
    } else {
        $(".jobsContainer").toggleClass("asc desc");
        inverdOrderDOM();
    }
});
// SCROLLED BUTTON
$("#scrollV").click(function(e) {
    e.preventDefault();
    if ($(".scrollH").hasClass("active")) {
        console.log("el otro está activo");
        $(".scrollH").removeClass("active");
        $('.jobsContainer').slick("destroy");
    } else {
        // console.log("no habia nada apretao");
    }

    $(this).toggleClass("active");

    $(".jobsContainer").toggleClass("scrolledV");
    $('.jobsContainer').slick("destroy");
});
// SLIDER BUTTON
$("#scrollH").click(function(e) {
    e.preventDefault();
    $("#expand").removeClass("active");


    if ($("#scrollV").hasClass("active")) {
        $("#scrollV").removeClass("active")
        $(".jobsContainer").toggleClass("scrolledV");
    }

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
// TRIGGER
$(".settingsTrigger").click(function(e) {
    e.preventDefault();
    $(".jobSelector__controls").toggleClass("active");
    $(this).toggleClass("active");
});

$(".settingsTrigger:not(.active)").hover(function() {
    $(this).toggleClass("hovered");
});