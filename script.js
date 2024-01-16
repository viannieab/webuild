/*====menu icon navbar====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*====search icon bar====*/
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-icon').onclick = () => {
    searchForm.classList.toggle('active');
}
/*====user login icon bar====*/
let userForm = document.querySelector('.user-form');
document.querySelector('#user-icon').onclick = () => {
    userForm.classList.toggle('active');
}
/*====info icon bar====*/
let contactInfo = document.querySelector('.contact-info');
document.querySelector('#info-icon').onclick = () => {
    contactInfo.classList.toggle('active');
}
document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
}
/*====scroll sections active link====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            }) 
        }
    })
/*====sticky navbar====*/
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY>100);
/*====remove menu icon navbar when click navbar link (scroll)====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*====swipper====*/
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
          slidesPerView: 2,
          },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
    },
});