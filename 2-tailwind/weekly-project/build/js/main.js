const initApp = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerMenu.classList.toggle("toggle-btn");
  };

  hamburgerMenu.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
