// This document pertains to the tablet and mobile hamburger menu function.

// This function has been adapted from Dev Ed's YouTube Responsive Navigation Tutorial https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1550s - code play file: https://www.codeply.com/p/hVa3gv9Umw
//Accessed: February 1, 2021

//Declare variables for function
const navSlide = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function() {
        //Toggle Nav
      nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach(function(link, index) {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
}
navSlide();

//End of Dev Ed's YouTube adaptation of Responsive Navigation Tutorial
