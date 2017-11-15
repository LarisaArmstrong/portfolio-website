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

    // masonry gallery plugin 

    // init Masonry

    var $grid = $('.grid').masonry({
        // options...
        itemSelector: '.grid-item',
        columnWidth:  '.grid-sizer',
        percentPosition: true,
        gutter: 10,
        horizontalOrder: true,
        percentPosition: true,
        fitWidth: true,
       
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });





    
    // var introVideo = videojs('#intro');

    introVideo.play();
    
    showVideo.play();

    // $('#showreel').get(0).play();

    // var showVideo = videojs('#showreel');


    //everything fades out when video played and fade in when paused 

    // $(function(){
        
    //         var video = $('#showreel')[0];
        
    //         video.addEventListener('playing', function(){
    //                $('.play').fadeOut();
    //         })
    //          video.addEventListener('pause', function(){
    //                $('.pause').fadeIn();
    //         })
        
    //     })




///////// END JQUERY /////////

});



///////// JAVASCRIPT //////////////


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

// ----------- VIDEO JS --------//
//-------------------------------------//

// intro

// var introVideo = videojs('intro');

// window.onload = function(){
//    videojs('intro',{
//     autoplay: true,
//     preload: 'auto',
//     controls: false,
//     loop: true,
//    });
// }

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

// showreel

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

var showVideo = document.getElementById('showreel'); 

function playVid() { 
    showVideo.play();
} 

function pauseVid() { 
    showVideo.pause(); 
} 
