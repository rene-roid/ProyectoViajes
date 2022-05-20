// ---- MENU SCRIPT ----
// Get element with this id menuButton
let menuButton = document.getElementById("menuButton");
let closeBurger = document.getElementById("closeBurger");
let rightHeader = document.getElementById("rightHeader");

menuButton.addEventListener("click", function () {
  // Print in console the text of the button
  console.log("menuButton.innerText");
  // Hide the menubutton
  menuButton.style.display = "none";
  // Show rightHeaderContent
  rightHeader.style.display = "block";
});

closeBurger.addEventListener("click", function () {
  // Hide the menubutton
  menuButton.style.display = "block";
  // Show rightHeaderContent
  rightHeader.style.display = "none";
});


// ---- SLIDER SCRIPT ----
// Image array from /img/place
let images = ["/img/place1.jpg", "/img/place2.jpg", "/img/place3.jpg", "/img/place4.jpg", "/img/place5.jpg"];

// Get slider elements
let slider = document.getElementById("slider");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("fotos");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
} 

// ---- SHOW HIDE ----
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let rightHeader = document.querySelector(".rightHeader");
  let arrowUp = document.querySelector(".arrowUp");

  if (window.scrollY > (header.offsetTop + header.offsetHeight)) {
    header.style = "background: rgba(255, 255, 255, 1); color: rgb(20, 82, 91);"
    rightHeader.style = "color: #14505b;"
    arrowUp.style = "display: block;"
  } else {
    header.style = "background-color: rgba(0, 0, 0, .5); color: rgb(20, 82, 91);"
    rightHeader.style = "color: rgb(255, 255, 255);"
    arrowUp.style = "display: none;"
  }
});