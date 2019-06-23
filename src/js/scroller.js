let triggers = $(".lobbyContainer>section");

triggers.click(function(event) {
    // Figure out element to scroll to
    // var target = $(this).attr("data-link");

    var _id = $(this).attr("data-link"); 


    // var target = document.querySelector(_id)
    var target = $(_id);


    // Does a scroll target exist?
    if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
    }
});