const menuFunction = () => {
  const menu = document.querySelector(".mobile-nav .menu-icon");
  const mobileNav = document.querySelector(".mobile-nav ul");
  const mockUp = document.querySelector(".mock-up");
  menu.addEventListener("click", () => {
    //hamburger animation
    menu.classList.toggle("burger-toggle");
    //Nav animation
    mobileNav.classList.toggle("menu-open");
    //MockUp
    if (mobileNav.classList.contains("menu-open")) {
      mockUp.style.transform = "translateX(-100%)";
      
    } else {
      mockUp.style.transform = "translateX(0)";
    }
  });
};
menuFunction();
