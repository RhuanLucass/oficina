const services = document.querySelectorAll("[data-animation]");
const main = document.querySelector("main");
const h1 = document.querySelector("main .text h1");
const p = document.querySelector("main .text p");

(function animationMain(){
  main.classList.add("animation");
  h1.classList.add("animation");
  p.classList.add("animation");
})();

window.addEventListener("scroll", downAnimation);

function downAnimation(e) {
  e.preventDefault();
  const windowTop = window.scrollY + window.innerHeight * 0.85;
  const scrollTop = window.scrollY + window.innerHeight * 0.5;


  services.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animation");
      sectionMenu(scrollTop);
    }
  });
}

function sectionMenu(scrollTop) {
  menus.forEach((link) => {
    const href = link.getAttribute("href");
    const element = document.querySelector(href);
    const posSection = element.offsetTop;
    const height = element.clientHeight;
    
    if (scrolled === false && posSection <= scrollTop && posSection + height > scrollTop) {
      menus.forEach((el) => el.classList.remove("select"));
      link.classList.add("select");
    }
  });
}