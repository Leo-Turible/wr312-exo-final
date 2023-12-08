const menuBtn = document.querySelector('.menu-btn');
const monMenu = document.querySelector("#menu")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        // menuBtn.classList.add('mon-menu1');
        //monMenu.classList.replace('mon-menu','mon-menu1');
        monMenu.classList.add('mobile-menu');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        // monMenu.classList.replace('mon-menu','mon-menu1');
        monMenu.classList.remove('mobile-menu');
        menuOpen = false;
    }
});