// This document pertains to the tablet and mobile hamburger menu function.

// This function has been adapted from Dev Ed's YouTube Responsive Navigation Tutorial https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1550s - code play file: https://www.codeply.com/p/hVa3gv9Umw
// Accessed: February 1, 2021

//Declare variables for function
const navSlide = function() {
    const burger = $(".burger");
    const nav = $(".nav-links");
    const navLinks = $(".nav-links li");

    burger.click(function() {
        //Toggle Nav
      nav.toggleClass("nav-active");
        //Animate Links
        navLinks.each(function(index, link) {
            if (link.style.animation){
                link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.toggleClass("toggle");
    });
}
navSlide();

//End of Dev Ed's YouTube adaptation of Responsive Navigation Tutorial
