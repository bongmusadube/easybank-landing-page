let menu = document.querySelector(".menu-icon");
let menuIcon = document.querySelector(".menu-icon img");
let mobileNav = document.querySelector(".mobile-nav ul");
let mockUp = document.querySelector(".mock-up");
console.log(mockUp);
menu.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-open");
  if (menuIcon.classList.contains("menu-open")) {
    mobileNav.style.visibility = "visible";
    menuIcon.src = "./images/icon-close.svg";
    mockUp.style.visibility = "hidden";
  } else {
    mobileNav.style.visibility = "hidden";
    menuIcon.src = "./images/icon-hamburger.svg";
    mockUp.style.visibility = "visible";
  }
   
});
