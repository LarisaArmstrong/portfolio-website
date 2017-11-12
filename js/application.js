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


///////// END JQUERY /////////

});


// ------- menu bar ------- //

function menuBar(x) {
    x.classList.toggle("change");
}

// function showList (){
//     var menu = document.getElementsByClassName("menu-container");
//     var list = document.getElementsByClassName("dropList");

//     if (menu.clicked == true){
//         list.style.display = "block";
//     };
// };
