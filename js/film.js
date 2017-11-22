'use strict';

var isPlaying = false;

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


    $('.p-button').click(function () {
            $('.p-button').fadeOut();
            $('.video-title').fadeOut()
    });

    // $('#showreel').on('mouseover', function(){
    //     $('.p-button').fadeIn();
    //     $('.video-title').fadeIn()
    // });

    // $('#showreel').on('mouseout', function(){
    //     $('.p-button').fadeOut();
    //     $('.video-title').fadeOut()
    // });

    $(document).on('mousemove',function() {  
        $('.p-button').fadeIn();
        $('.video-title').fadeIn();
     });

        var $top = $('.video-actions');
        var $document = $(document);
        var timer = null;
        var timerIsRunning = false;
    
        $top.hide();
    
        $(document).mousemove(function(e){
            e.stopPropagation();
        });
        setTimeout(function() {

            $document.mousemove(function(e) {
                if($top.is(':hidden')) {
                    $top.fadeIn();
                } else {
                    if(!timerIsRunning) {
                        timerIsRunning = true;
                        clearTimeout(timer);
                        timer = setTimeout(function() { $top.fadeOut();  }, 5000);
                        setTimeout(function() {timerIsRunning = false;}, 2000);
                    }
                }
            });
        }, 500);




    
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

showreel

var showVideo = videojs('showreel', {
    autoplay: false,
    preload: 'auto',
    controls: false,
    loop: false,
});

showVideo.on('canplaythrough', function(){
    var body = document.getElementsByTagName('body')[0];
    
    body.classList.remove('is-loading');
});

showVideo.on('playing', function() {
    isPlaying = true;
  });

function playVid() { 
    showVideo.play();
} 

function pauseVid() { 
    showVideo.pause(); 
} 
