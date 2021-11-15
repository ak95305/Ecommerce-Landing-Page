let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.mobile-nav');
let bgOverlay = document.querySelector('.bg-overlay');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('close');
    mobileNav.classList.toggle('down');
    bgOverlay.classList.toggle('show');
})