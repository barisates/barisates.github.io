$(function () {
    $("#preloader").fadeOut(500, function () { $(this).remove(); Animate(); })    function Animate() {
        $("#card").animate({
            bottom: '10%',
            opacity: '1'
        }, 1500, function () {
            $("#beard").delay(500).fadeIn(500);
        });

        
    }

});