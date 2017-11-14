'use strict';

///////// JQUERY ////////////

$(document).ready(function(){

    // fullpage.js plugin

     $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 1000,
        fitToSection: true,
    });

    $("menu-container").click(function(){
        $(this);
    }); 
    
  
    introVideo.play();


///////// END JQUERY /////////

});



///////// JAVASCRIPT //////////////


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

// ----------- INTRO VIDEO JS --------//
//-------------------------------------//

// videojs('intro', {
//     controls: true,
//     autoplay: true,
//     preload: 'auto',
//     loop: true,
//   });
  

var introVideo = videojs('intro', {
    autoplay: true,
    preload: 'auto',
    controls: false,
    loop: true,
});

introVideo.on('canplaythrough', function(){
    var body = document.getElementsByTagName('body')[0];
    
    body.classList.remove('is-loading');

});
