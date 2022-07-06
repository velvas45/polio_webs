import { toggleMenu, onChoiceYear, insertDataToHTML } from "./function.js";

// DOM
const icon_open_menu = document.querySelector("#menu_icon");
const choiceYearTag = document.querySelectorAll(".option__label");
const selectTag = document.querySelector("#select-year");
const sidebarLinks = document.querySelectorAll("#sidebar_link");

icon_open_menu.addEventListener("click", () => toggleMenu());

choiceYearTag.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const valInput = e.target.textContent;
    onChoiceYear(valInput, insertDataToHTML);
  });
});

selectTag.addEventListener("change", (e) => {
  e.preventDefault();
  const valInput = e.target.value;
  onChoiceYear(valInput, insertDataToHTML);
});

sidebarLinks.forEach((item, idx) => {
  item.addEventListener("click", () => toggleMenu());
});

// initial swiper
const swiper = new Swiper(".mySwiper", {
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
