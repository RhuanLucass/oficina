const header = document.querySelector("header");
const title = document.querySelector("header .logo h2");
const ul = document.querySelectorAll("header nav ul");
const li = document.querySelectorAll("header nav ul li");
const icon = document.querySelector(".icon-bars");
const bar = document.querySelector(".bar");
const barTop = document.querySelector(".bar-top");
const barBottom = document.querySelector(".bar-bottom");
const mobile = document.querySelector(".desktop");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".desktop li a");


window.addEventListener("scroll", navScroll);
function navScroll(e) {
  if (window.scrollY > 0) {
    header.classList.add("header-less");
    title.classList.add("h2-less");
    li.forEach((element) => element.classList.add("li-less"));
    ul.forEach((element) => element.classList.add("ul-less"));
    mobile.classList.add('menu-less');
  } else {
    header.classList.remove("header-less");
    title.classList.remove("h2-less");
    li.forEach((element) => element.classList.remove("li-less"));
    ul.forEach((element) => element.classList.remove("ul-less"));
    mobile.classList.remove('menu-less');
  }
}

icon.addEventListener("click", transformIcon);

function transformIcon(e) {
  e.preventDefault;
  !bar.classList.contains("rotate") ? showMenu() : hideMenu();
}

links.forEach((link) => link.addEventListener("click", hideMenu));
overlay.addEventListener("click", hideMenu);

function hideMenu() {
  bar.classList.remove("rotate");
  barTop.classList.remove("rotate-top");
  barBottom.classList.remove("rotate-bottom");
  mobile.classList.toggle("desktop-toggle");
  overlay.style.display = "none";
}

function showMenu() {
  bar.classList.add("rotate");
  barTop.classList.add("rotate-top");
  barBottom.classList.add("rotate-bottom");
  mobile.classList.toggle("desktop-toggle");
  overlay.style.display = "block";
}
