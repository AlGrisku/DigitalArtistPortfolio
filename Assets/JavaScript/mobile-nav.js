const hamburger = document.querySelector('.header .nav-bar-mb .nav-list .burger');
const mobile_menu = document.querySelector('.header .nav-bar-mb .nav-list ul');
const body_background = document.querySelector('.header .nav-bar-mb .nav-list');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    body_background.classList.toggle('active');
});
