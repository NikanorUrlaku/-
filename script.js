const header = document.querySelector("header");

window.addEventListener("scroll", checkScroll);

document.addEventListener("DOMContentLoaded",checkScroll);

function checkScroll() {
    let scrollPoz = window.scrollY;
    if(scrollPoz > 0){
        header.classList.add('zakreplenje')
    } else {
        header.classList.remove('zakreplenje')
    }
};
