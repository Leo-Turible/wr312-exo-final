const menuBtn = document.querySelector('.menu-btn');
const monMenu = document.querySelector("#menu")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        monMenu.classList.add('mobile-menu');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        monMenu.classList.remove('mobile-menu');
        menuOpen = false;
    }
});