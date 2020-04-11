const menuBtn = document.querySelector(".menu-btn");
const logoCircle = document.querySelector("#navy_bcg");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
// const showWeb = document.querySelector("#WEB");

const top = document.querySelector("#topBTN");
const bottom = document.querySelector("#bottomBTN");
const left = document.querySelector("#leftBTN");
const right = document.querySelector("#rightBTN");
const homeBTN = document.querySelector("#homeBTN");



// variables for toggle functionality
let showMenu = false;
let shieldItems = false;

// ______________________******__________________


// home button function

document.addEventListener("DOMContentLoaded", function() {
  logoCircle.addEventListener("click", circle);

  function circle() {
    if (!shieldItems) {
      // showShieldItems.classList.add("open");
      top.classList.add("open");
      left.classList.add("open");
      right.classList.add("open");
      bottom.classList.add("open");

      shieldItems = true;
    } else {
      // showWeb.classList.remove("open");
      top.classList.remove("open");
      left.classList.remove("open");
      rigth.classList.remove("open");
      bottom.classList.remove("open");

      shieldItems = false;
    }
  }
});

// ______________________******__________________

//menu hamburger function

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


// ______________________******__________________


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


// ______________________******__________________

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



// ______________________******__________________
      

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




