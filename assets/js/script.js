"use strict";
let lastScrollY = window.scrollY;
document.addEventListener("scroll", function (e) {
  if (window.scrollY > lastScrollY) {
    document.querySelector("header").style.top = "-70px";
  } else {
    document.querySelector("header").style.top = "0px";
  }

  lastScrollY = window.scrollY;
});
