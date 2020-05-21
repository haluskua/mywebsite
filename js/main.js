



const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

const shieldCircle = document.querySelector("#homeBTN");
const topShield = document.querySelector("#topBTN");
const leftShield = document.querySelector("#leftBTN");
const bottomShield = document.querySelector("#bottomBTN");
const rightShield = document.querySelector("#rightBTN");

let shield = false;

let showMenu = false;


// togle for shield on landing page

// document.addEventListener("DOMContentLoaded", function () {
//   shieldCircle.addEventListener("click", toggleShield);

//   function toggleShield(e) {
//     if (!shield) {
//       topShield.classList.add("open");
//       leftShield.classList.add("open");
//       rightShield.classList.add("open");
//       bottomShield.classList.add("open");

//       shield = true;
//     } else {
//       topShield.classList.remove("open");
//       leftShield.classList.remove("open");
//       rightShield.classList.remove("open");
//       bottomShield.classList.remove("open");

//       shield = false;
//     }
//   }
// });


//////////////////////////////////


// toggleMenu Hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu(e) {
    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));

      showMenu = true;
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));

      showMenu = false;
    }
  }
});


///////////////////////////////////

// image gallery function

function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach((preview) => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.classList.add("room-active");
    });
  });
}

imageGallery();

const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 1;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  // Reset the opacity
  img.forEach((img) => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}


// ---------------------------*****************-------------------------


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

// ---------------------------*****************-------------------------
//jQuery for social icons

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 440) {
      $(".social-icons").addClass("show-icons");
    } else {
      $(".social-icons").removeClass("show-icons");
    }
  });
});



/////////////////////////////////////////
/// from lux library,, updating code on resize of window-size

window.addEventListener("resize", function() {
	lax.updateElements()
});

///// from lax library, break-points

lax.setup({
  breakpoints: { small: 0, large: 992 }
})



////////////////


