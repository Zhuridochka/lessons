"use strict";

// Події в JavaScript

// const button = document.querySelector(".page__button");

// button.addEventListener("click", () => {
//   alert("Hello, dear friend!");

//   // button.style.backgroundColor = "#794f45";
// });

// button.addEventListener("click", setStyle);
// button.addEventListener("mouseenter", setStyle);
// button.addEventListener("mouseleave", setStyleLeave);

// function setStyle() {
//   button.style.backgroundColor = "#794f45";
// }

// function setStyleLeave() {
//   button.style.backgroundColor = "#4b8e32";
// }

//* Одна подія на декілька кнопок з однаковим класом

// const buttons = document.querySelectorAll(".page__button");
// const pageContainer = document.querySelector(".page__container");
// pageContainer.insertAdjacentHTML(
//   "beforeend",
//   `<button class="page__button button" type="button">Add click me</button>`
// );

// pageContainer.insertAdjacentHTML(
//   "beforeend",
//   `<input class="page__button button" type="button" value="go over">`
// );

// Цей підхід не дуже правильний. Високе навантаження на браузер
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.style.backgroundColor = "#794f45";
//     button.style.color = "black";
//     alert("Hello!");
//   });
// });

//* Змінна події event(e)

//* Делегування події
// const pageContainer = document.querySelector(".page__container");
// pageContainer.insertAdjacentHTML(
//   "beforeend",
//   `<button class="page__button button" type="button">Add click</button>`
// );

// document.addEventListener("click", documentAction);
// // document.addEventListener("mouseenter", documentAction);

// const header = document.querySelector(".header");
// const textHeader = document.querySelector(".header__text");
// document.addEventListener("click", setStyle);

// function setStyle(e) {
//   const elementTarget = e.target;

//   if (elementTarget.closest(".header__text")) {
//     const currentElement = elementTarget.closest(".header");
//     currentElement.classList.toggle("active");
//   }
// }

// Дадавання классу show для кнопок button
// document.addEventListener("click", documentAction);
// document.addEventListener("mousemove", documentAction);

// function documentAction(e) {
//   const elementTarget = e.target;

//   if (elementTarget.closest(".button") && e.type === "click") {
//     const currentElement = elementTarget.closest(".button");
//     currentElement.classList.toggle("show");
//     const tag = e.target.tagName.toLowerCase();

//     if (tag === "input") {
//       alert("я тег `input`");
//     }
//   }

//* Події миші
//   if (elementTarget.closest(".block") && e.type === "mousemove") {
//     const currentElement = elementTarget.closest(".block");
//     console.log(e.clientX - currentElement.offsetLeft);
//     console.log(e.clientY - currentElement.offsetTop);
//   }
//   e.preventDefault();
// }

//const elem = document.querySelector("header");
// console.log(elem.tagName);
// console.log(elem.tagName.toLowerCase());

//* Scroll
// const block = document.querySelector(".block");
// window.addEventListener("scroll", windowScroll);

// function windowScroll(e) {
//   // console.log(window.scrollY);
//   if (block.getBoundingClientRect().top - window.innerHeight <= 0)
//     console.log(`Об'єкт з'явився`);
// }

//* Intersextion Observer
// налаштування Intersextion Observer
// const options = {
//   root: null,
//   rootMargin: "0px 0px 0px 0px",
//   threshold: 0.5,
// };

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     const currentElement = entry.target;
//     if (entry.isIntersecting) {
//       currentElement.classList.add("animate");
//       console.log("Я тебе бачу");
//     } else {
//       currentElement.classList.remove("animate");
//       console.log("Я не тебе бачу");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// const animElements = document.querySelectorAll("[class*='--anim']");
// animElements.forEach((animElement) => {
//   observer.observe(animElement);
// });

//* Подія завантаження
// window.addEventListener("load", pageLoaded);
// function pageLoaded(e) {
//   document.documentElement.style.opacity = 1;
// }

//* Таймер setTimeout
//let i = 10;
//let timer = setInterval(() => {
//console.log(i);
// if (i === 1) {
//   clearInterval(timer);
// } else {
//   null;
// }

// ця ж перевірка за допомогою
// тернарного оператора
//   i === 1 ? clearInterval(timer) : null;
//   --i;
// }, 1000);

//* Задача №1
document.addEventListener("click", documentClickAction);

function documentClickAction(e) {
  const elementTarget = e.target;

  if (elementTarget.closest(".item-page")) {
    const currentElement = elementTarget.closest(".item-page");
    currentElement.classList.toggle("active");
  }
}

//* Задача №2
const bodyElement = document.body;
window.addEventListener("load", pageLoaded);

function pageLoaded(e) {
  bodyElement.classList.add("loaded");
}

//* Задача №3
const headerElement = document.querySelector(".header");
const footerElement = document.querySelector(".footer");

if (footerElement && headerElement) {
  headerElement.addEventListener("mouseenter", () => {
    footerElement.classList.add("show");
  });

  headerElement.addEventListener("mouseleave", () => {
    footerElement.classList.remove("show");
  });
}

//* Задача №4
const timerElement = document.querySelector(".content-block__item");
const valueElement = +timerElement.dataset.value || 10;
const speedInterval = +timerElement.dataset.speedInterval || 1200;

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentElement = entry.target;
      currentElement.classList.add("animate");

      // Створення функції для таймеру
      let i = 1;
      let timer = setInterval(() => {
        timerElement.textContent = i++;
        if (timerElement.textContent == valueElement) {
          clearInterval(timer);
        }
      }, speedInterval);

      // Відключаємо спостереження після першого спрацювання
      observer.unobserve(currentElement);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const animElements = document.querySelectorAll("[class*='--anim']");
animElements.forEach((animElement) => {
  observer.observe(animElement);
});
