var nav = document.getElementById('navbar')
var navbarMobile = document.getElementById('navbarMobile')
var menuBtn = document.getElementById('burger')
var menu = document.getElementById('menu')
var menuLine1 = document.getElementById('menuLine1')
var menuLine2 = document.getElementById('menuLine2')

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        nav.style.width = '80vw';
        nav.style.marginLeft = '10vw';
        nav.style.position = 'fixed';
        nav.style.marginTop = '5vh';
        nav.style.borderRadius = '40px';
        nav.style.boxShadow = '5px 5px 30px rgba(0, 0, 0, 0.25)';
        nav.style.boxShadow = '5px 5px 30px rgba(0, 0, 0, 0.25)';
        nav.style.height = '12.5vh';
    }
    else {
        nav.style.width = '100vw';
        nav.style.marginLeft = '0vw';
        nav.style.position = 'fixed';
        nav.style.marginTop = '0vh';
        nav.style.borderRadius = '0px';
        nav.style.boxShadow = 'none';
        nav.style.height = '15vh';
    }
}

menu.style.opacity = '0';

menuBtn.addEventListener("click", menuBtnClick);

function menuBtnClick() {
    if (menu.style.opacity === '0') {
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'all';
        menuLine1.style.transform = 'rotate(45deg) translateY(2.5vh)';
        menuLine2.style.transform = 'rotate(-45deg) translateY(-2.5vh)';
        menuLine2.style.width = '10vw';
        navbarMobile.style.boxShadow = 'none'
    }
    else {
        menu.style.opacity = '0';
        menu.style.pointerEvents = 'none';
        menuLine1.style.transform = 'rotate(0deg) translateY(0vh)';
        menuLine2.style.transform = 'rotate(0deg) translateY(0vh)';
        menuLine2.style.width = '7.5vw';
        navbarMobile.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.15)'
    }
}