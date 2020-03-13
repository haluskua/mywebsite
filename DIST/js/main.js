const menuBtn = document.querySelector(".menu-btn");
const logoBtn = document.querySelector("#icon");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

const showWeb = document.querySelector("#WEB");

//JAVASCRIPT DEMONSTRATION

let showMenu = false;
let logoItems = false;

menuBtn.addEventListener("click", toggleMenu);
logoBtn.addEventListener("click", webTest);

function webTest() {
  if (!logoItems) {
  
    showWeb.classList.add("open");

    logoItems = true;
    
  } else {
    showWeb.classList.remove("open");
   
    logoItems = false;
  }
}

function toggleMenu() {
  if (!showMenu) {
  
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));

    showMenu = false;
  }
}

//jQuery

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 440) {
      $(".socialIcons").addClass("showIcons");
    } else {
      $(".socialIcons").removeClass("showIcons");
    }
  });
});
