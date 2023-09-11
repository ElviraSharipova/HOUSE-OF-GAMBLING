// Скролл
new SimpleBar(document.getElementById('scroll'), { autoHide: false, scrollbarMaxSize: 104, });




//Анимация

const image = document.querySelector(".banner__img2");

const tl1 = gsap.timeline({ repeat: Infinity });

if (window.matchMedia("(max-width: 320px)").matches) {

    tl1.from(".banner__img2", { duration: 3, x: 20, y: 0 })
        .to(".banner__img2", { duration: 3, x: 20, y: 0 })
        .to(".banner__img2", { duration: 3, x: 20, y: 0 })
} else {

    tl1.from(".banner__img2", { duration: 3, x: 0, y: 200 })
        .to(".banner__img2", { duration: 3, x: 0, y: 200 })
        .to(".banner__img2", { duration: 3, x: 0, y: 200 })

}
window.onresize = function() {
    tl1.kill();
    image.style.transform = "unset"
};



//Бургер
const burger = document.querySelector(".burger");
const menu = document.querySelector(".burger-nav")
const menuLinks = document.querySelectorAll(".burger-nav__link");
const headerCont = document.querySelector(".header-container");


burger.addEventListener('click', function() {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("burger-nav--active");

    burger.classList.toggle("burger--onMenu");
})


menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove("burger--active");
        menu.classList.remove("burger-nav--active");
        burger.classList.remove("burger--onMenu");
    })
})