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

document.addEventListener("DOMContentLoaded", function() {
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
});

document.addEventListener("DOMContentLoaded", function() {
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu(e) {
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
});

// image gallery function

function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.classList.add("room-active");
    });
  });
}

imageGallery();

//jQuery for social icons

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

const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;


// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  // Reset the opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}


// READMORE script

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}