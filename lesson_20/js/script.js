window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const header = document.getElementById("myHeader");
  // Условие для определения, когда добавлять класс с фоном
  if (scrollPosition > 90) {
    // Пример: добавить фон после прокрутки на 60 пикселей
    header.classList.add("header-background");
  } else {
    header.classList.remove("header-background");
  }
});

/**Додавання класу active для меню і кнопки меню-бургер */
const menuIcon = document.querySelector(".menu__icon.icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");
menuIcon.addEventListener("click", function (event) {
  menuIcon.classList.toggle("active");
  menuBody.classList.toggle("active");
  body.classList.toggle("lock");
});
