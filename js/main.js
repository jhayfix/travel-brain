// Header Navbar
const aboutItem = document.querySelector('#navbar-about-item')
const homeItem = document.querySelector('#navbar-home-item')
const contactItem = document.querySelector('#navbar-contact-item')
const headerNavbar = document.querySelector('#header-navbar')

const menu = document.querySelector('#menu');
const menuLine = document.querySelectorAll('.menu-line');
const mobileNav = document.querySelector('#mobile-nav')


// Header Navbar
aboutItem.addEventListener('click', (e) => {
    e.preventDefault()
    aboutItem.classList.add('active');
    homeItem.classList.remove('active');
    contactItem.classList.remove('active');
})
homeItem.addEventListener('click', (e) => {
    e.preventDefault()
    aboutItem.classList.remove('active');
    homeItem.classList.add('active');
    contactItem.classList.remove('active');
})
contactItem.addEventListener('click', (e) => {
    e.preventDefault()
    aboutItem.classList.remove('active');
    homeItem.classList.remove('active');
    contactItem.classList.add('active');
})

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
