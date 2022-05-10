"use strict";
const menus = document.querySelectorAll(".dropdown");
console.log(menus);

menus.forEach((menu) => {
  console.log(menu.nextElementSibling);

  menu.addEventListener("click", () => {
    if (!menu.nextElementSibling.classList.contains("hide")) {
      menu.nextElementSibling.classList.add("hide");
    } else {
      menus.forEach((menu) => {
        menu.nextElementSibling.classList.add("hide");
      });
      menu.nextElementSibling.classList.remove("hide");
    }
  });

  window.addEventListener("click", (e) => {
    console.log(e.target.parentNode);

    if (
      e.target !== menu.nextElementSibling &&
      e.target !== menu &&
      e.target.parentNode !== menu.nextElementSibling
    ) {
      menu.nextElementSibling.classList.add("hide");
    }
  });
});
