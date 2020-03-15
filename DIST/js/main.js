const menuBtn = document.querySelector(".menu-btn");
const logoBtn = document.querySelector("#icon");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
// const showWeb = document.querySelector("#WEB");


const projects = document.querySelector("#projectsButton");
const contact = document.querySelector("#contactButton");
const about = document.querySelector("#aboutButton");
const life = document.querySelector("#lifeButton");
const ONE = document.querySelector("#LIFE");
const TWO = document.querySelector("#PRO");
const THREE = document.querySelector("#ABOUT");
const FOUR = document.querySelector("#CONNECT");



//JAVASCRIPT DEMONSTRATION

let showMenu = false;
let logoItems = false;

menuBtn.addEventListener("click", toggleMenu);
logoBtn.addEventListener("click", webTest);




function webTest() {
  if (!logoItems) {
  
    // showWeb.classList.add("open");
    projects.classList.add("open");
    contact.classList.add("open");
    about.classList.add("open");
    life.classList.add("open");
    ONE.classList.add("open");
    TWO.classList.add("open");
    THREE.classList.add("open");
    FOUR.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));


    logoItems = true;

  } else {
    // showWeb.classList.remove("open");
    projects.classList.remove("open");
    contact.classList.remove("open");
    about.classList.remove("open");
    life.classList.remove("open");
    ONE.classList.remove("open");
    TWO.classList.remove("open");
    THREE.classList.remove("open");
    FOUR.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));

    
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
