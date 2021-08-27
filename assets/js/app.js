var nav = document.getElementById('navbar')

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
};