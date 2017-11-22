'use strict';

///////// JQUERY ////////////

$(document).ready(function(){

    

    // fullpage.js plugin

     $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 1000,
        fitToSection: true,
        scrollOverflow: true,
    });

    $("#menuToggle").click(function(){
        $(this);
    }); 


///////// END JQUERY /////////

});



///////// JAVASCRIPT //////////////


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

// scroll plugin 

var myScroll2 = new IScroll('#about-page', {
    mouseWheel: true,
    scrollbars: true,
});
