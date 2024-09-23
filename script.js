'use strict';



//preload --- loading will be end after document is loaded

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function (){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

//-------------toggle menu
var navLinks = document.getElementById("navLinks");
    function showMenu() {
        navLinks.style.right = "0";
}
    function hideMenu() {
        navLinks.style.right = "-200px";
}

let slideshowIndices = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // For 2 slideshows
    let slideshowTimers = [];

    function displaySlides(n, index) {
        let i;
        let slides = document.querySelectorAll('.custom-slideshow-section')[index].getElementsByClassName('custom-slide');
        if (n > slides.length) {slideshowIndices[index] = 1}
        if (n < 1) {slideshowIndices[index] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideshowIndices[index]-1].style.display = "block";
    }

    function navigateSlides(n, index) {
        displaySlides(slideshowIndices[index] += n, index);
    }

    function autoSlide(index) {
        let i;
        let slides = document.querySelectorAll('.custom-slideshow-section')[index].getElementsByClassName('custom-slide');
        slideshowIndices[index]++;
        if (slideshowIndices[index] > slides.length) {slideshowIndices[index] = 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideshowIndices[index]-1].style.display = "block";
        slideshowTimers[index] = setTimeout(function(){ autoSlide(index) }, 3000); // Auto change every 3 seconds
    }

    // Start auto slideshow for all sections
    for (let i = 0; i < slideshowIndices.length; i++) {
        displaySlides(slideshowIndices[i], i);
        autoSlide(i);
    }