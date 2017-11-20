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



///////// END JQUERY /////////

});



///////// JAVASCRIPT //////////////


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

