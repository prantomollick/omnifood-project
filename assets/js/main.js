const hamburgerMenuBtn = document.querySelector(".btn-mobile-nav");

const hamburgerMenuHandler = () => {
  const header = document.querySelector(".header");
  header.classList.toggle("nav-open");
};

hamburgerMenuBtn.addEventListener("click", hamburgerMenuHandler);
