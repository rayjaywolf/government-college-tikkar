import "./style.scss";

let menu = document.querySelector(".menu");
let headerMobileContent = document.querySelector(".header-mobile-content");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  headerMobileContent.classList.toggle("active");
  let img = document.querySelector(".menu img");
  if (menu.classList.contains("open")) {
    img.src = "menu-white.svg";
  } else {
    img.src = "menu.svg";
  }
});
