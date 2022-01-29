// Header Navbar
const aboutItem = document.querySelector('#navbar-about-item')
const homeItem = document.querySelector('#navbar-home-item')
const contactItem = document.querySelector('#navbar-contact-item')
const headerNavbar = document.querySelector('#header-navbar')

const menu = document.querySelector('#menu');
const menuLine = document.querySelectorAll('.menu-line');
const mobileNav = document.querySelector('#mobile-nav')


// Jump To Top
const toTop = document.querySelector('.jump-to-top');

// Header Navbar
// aboutItem.addEventListener('click', (e) => {
//     e.preventDefault()
//     aboutItem.classList.add('page-active');
//     homeItem.classList.remove('page-active');
//     contactItem.classList.remove('page-active');
// })
// homeItem.addEventListener('click', (e) => {
//     e.preventDefault()
//     aboutItem.classList.remove('page-active');
//     homeItem.classList.add('page-active');
//     contactItem.classList.remove('page-active');
// })
// contactItem.addEventListener('click', (e) => {
//     e.preventDefault()
//     aboutItem.classList.remove('page-active');
//     homeItem.classList.remove('page-active');
//     contactItem.classList.add('page-active');
// })

//  Navbar Display

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuLine.forEach((line) => {
        line.classList.toggle('show')
    });
    mobileNav.classList.toggle('show');
})

// Navbar Display End

// Navbar fixed on scroll
document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 350) {
            headerNavbar.classList.add('fixed');
            mobileNav.classList.add('fixed')
        }else {
            headerNavbar.classList.remove('fixed')
            mobileNav.classList.remove('fixed')
        }
    });
});

// End Header Navbar 

// Scroll To Top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Auto Showcase Slides

var slideShowIndex = 0;
showSlidesFunc();

function showSlidesFunc() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideShowIndex++;
  if (slideShowIndex > slides.length) {slideShowIndex = 1}
  slides[slideShowIndex-1].style.display = "block";
  setTimeout(showSlidesFunc, 3500); // Change image every 2 seconds
}


// Manuel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


