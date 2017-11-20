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

    $("menu-container").click(function(){
        $(this);
    }); 


    
    // showVideo.play();




///////// END JQUERY /////////

});



///////// JAVASCRIPT //////////////


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

// ----------- VIDEO JS --------//
//-------------------------------------//

// showreel

// var showVideo = videojs('showreel', {
//     autoplay: false,
//     preload: 'auto',
//     controls: false,
//     loop: false,
// });

// showVideo.on('canplaythrough', function(){
//     var body = document.getElementsByTagName('body')[0];
    
//     body.classList.remove('is-loading');

// });

// var showVideo = document.getElementById('showreel'); 

// function playVid() { 
//     showVideo.play();
// } 

// function pauseVid() { 
//     showVideo.pause(); 
// } 
