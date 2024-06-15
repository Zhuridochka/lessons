"use strict";

// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");

// button1.addEventListener("click", func1);
// button2.addEventListener("click", func2);

// function func1() {
//   console.log("1");
// }
// function func2() {
//   console.log("2");
// }

// let windowWidth = window.innerWidth;
// console.log(windowWidth);

// let windowHight = window.innerHeight;
// console.log(windowHight);

// console.log(navigator.userAgent);

// if (navigator.userAgent.includes("Chrome")) {
//   console.log(`Ви використовуєте браузер Chrome`);
// } else if (navigator.userAgent.includes("Firefox")) {
//   console.log(`Ви використовуєте браузер Firefox`);
// } else {
//   console.log(`Ви використовуєте браузер відмінний від Chrome і Firefox`);
// }

// console.log(navigator.platform);

// console.log(location.href);

// let htmlElement = document.documentElement;
// console.log(htmlElement);

// let headElement = document.head;
// console.log(headElement);

// let bodyElement = document.body;
// let childNodes = bodyElement.children;
// console.log(childNodes);

// for (let i = 0; i < childNodes.length; i++) {
//   const element = childNodes[i];
//   console.log(element);
// }

// for (const childNode of childNodes) {
//   console.log(childNode);
// }

// console.log(bodyElement);

// let firstChild = bodyElement.firstElementChild;
// console.log(firstChild);

// let lastChild = bodyElement.lastElementChild;
// console.log(lastChild);

// let bodyElement = document.body;
// let previousSubling = bodyElement.previousSibling;
// let nextSubling = bodyElement.nextSibling;
// let parentElement = bodyElement.parentElement;

// console.log(previousSubling);
// console.log(nextSubling);
// console.log(parentElement);

// let someObject = document.querySelector(".menu__item");
// console.log(someObject);

// const someObjects = document.querySelectorAll(".menu__item");

// someObjects.forEach((someObject) => {
//   someObject.style.color = "green";
// });

// let someArray = Array.from(someObjects);
// console.log(someArray);
// for (const someObject of someArray) {
//   someObject.style.color = "yellow";
// }

// const list = document.querySelector(".menu__list");

// const isPageParent = list.closest(".menu__body");
// console.log(isPageParent);

// const listItems = document.querySelectorAll(".menu__item");

// listItems.forEach((listItem, index) => {
//   // listItem.innerHTML = `<span>Якийся текст:${index}</span>`;
//   listItem.textContent = `Я новий текст`;
// });

// console.log(listItems);

// let newObject = document.createElement("button");
// newObject.classList.add("button-new");

// let windowWidth = window.innerWidth;
// const menuBody = document.querySelector(".menu__body");

// newObject.innerHTML = `<span>Я нова кнопка</span>`;

// if (windowWidth <= 420) {
//   menuBody.insertAdjacentElement("afterbegin", newObject);
// }

// const menuItem = document.querySelector(".menu__item");

// menuItem.classList.toggle("active");

// menuItem.classList.contains("active");

// if (menuItem.classList.contains("active")) {
//   newObject.style.cssText = `
//   font-size: toRem(25);
//   font-weight: 600;
//   padding: toRem(15) toRem(20);
//   line-height: 1.2;
//   color: black;
//   background-color: white;
//   border: 1px solid red;
//   border-radius: toRem(7);`;
// } else {
//   console.log(`Такого класу немає`);
// }

// const menuItem = document.querySelector(".menu__item");
// console.log(menuItem);

// const menuItemStyle = getComputedStyle(menuItem);
// console.log(menuItemStyle);

// const menuItemStyleFontSize = parseFloat(menuItemStyle.fontSize);
// console.log(menuItemStyleFontSize);

// const menuItemStyleColor = menuItemStyle.color;
// console.log(menuItemStyleColor);

// const list = document.querySelector(".menu__list");
// console.log(list.hasAttribute("class"));

// console.log(list.getAttribute("class"));

// list.setAttribute("title", "Підказка");

// const list = document.querySelector(".menu__list");
// const speed = parseFloat(list.dataset.speed) || 700;
// console.log(speed);

//const button = document.querySelector(".icon-menu");
//console.log(button);

// button.removeAttribute("type");
// console.log(button.getAttribute("class"));
//button.setAttribute("type", "submit");

// const list = document.querySelector(".menu__list");
// console.log(list);
// list.hidden = true;
// list.setAttribute("data-speed", "1500-tr");

// const menuItem = document.querySelector(".menu__item");
// console.log(menuItem);
// menuItem.hidden = false;

// const menuItems = document.querySelectorAll(".menu__item");

// menuItems.forEach((menuItem, index) => {
//   if (index % 2 === 0) {
//     menuItem.hidden = true;
//     // console.log(`Element at even index ${index} is ${menuItem}`);
//   }
// });

// const windowWidth = window.innerWidth;
// const windowHight = window.innerHeight;
// console.log(windowWidth);
// console.log(windowHight);

// const mainElement = document.body;
// const windowClientWidth = mainElement.clientWidth;
// const windowClientHight = mainElement.clientHeight;
// console.log(windowClientWidth);
// console.log(windowClientHight);

// const windowScrollTop = window.scrollY;
// console.log(windowScrollTop);

// window.scrollTo({
//   top: 635,
//   left: 0,
//   behavior: "smooth", //Safari не працює
// });

// const list = document.querySelector(".menu__list");

// function scrollToBlock(element) {
//   const block = element.dataset.scroll;
//   element.scrollIntoView({
//     block: block,
//     inline: "nearest",
//     behavior: "smooth",
//   });
// }

// scrollToBlock(list);

// const list = document.querySelector(".menu__list");
// const listLeftPos = list.offsetLeft;
// const listTopPos = list.offsetTop;

// console.log(listLeftPos);
// console.log(listTopPos);

// const list = document.querySelector(".menu__list");
// console.log(list.getBoundingClientRect().top);
// console.log(list.getBoundingClientRect().left);

// const header = document.querySelector(".header__menu");
// console.log(header.getBoundingClientRect().top);
// console.log(header.getBoundingClientRect().left);

// const list = document.querySelector(".menu__list");
// console.log(list.offsetWidth);
// console.log(list.offsetHeight);

// const list = document.querySelector(".menu__list");

// const listItems = document.querySelectorAll(".menu__item");

// list.insertAdjacentHTML(
//   "beforeend",
//   `<li class="menu__item"><a href='#' class="menu__link">Email</a></li>`
// );
// console.log(listItems);

// const wrapper = document.querySelector(".wrapper");
// const listItems = document.querySelectorAll(".menu__item");
// listItems.forEach((elem, index) => {
//   if (index % 2 !== 0) {
//     elem.style.color = "green";
//   }
// });

// const nav = document.querySelector(".menu__body");
// const cloneNav = nav.cloneNode(true);
// wrapper.insertAdjacentElement("beforeend", cloneNav);

// console.log(wrapper);

// cloneNav.remove();
// console.log(wrapper);

// const listItems = document.querySelectorAll(".menu__item");
// const list = document.querySelector(".menu__list");
// // console.log(list);

// list.insertAdjacentHTML(
//   "beforeend",
//   `<li class="menu__item"><a href="#" class="menu__link">Email</a></li>`
// );
// // console.log(listItems);

// const childNodes = list.children;
// console.log(typeof childNodes);

// for (let i = 0; i < childNodes.length; i++) {
//   const element = childNodes[i];
//   console.log(element);
// }

// for (const childNode of childNodes) {
//   console.log(childNode);
// }

// const bodyElement = document.body;
// const wrapper = document.querySelector(".wrapper");
// const previousSibling = wrapper.previousElementSibling;
// const nextSibling = wrapper.nextElementSibling;
// console.log(previousSibling);
// console.log(nextSibling);

// const liElement = document.querySelector("li");
// console.log(liElement);
// const ulElement = document.querySelector("ul");
// console.log(ulElement);

// if (liElement) {
//   console.log("!!!");
// } else {
//   console.log("---");
// }

// const liElements = document.querySelectorAll("li");
// console.log(liElements);

// if (liElements.length > 5) {
//   liElements.forEach((element, index) => {
//     element.innerHTML = `<span>Індекс: ${index}</span>`;
//   });
// }

// const someImage = document.querySelector(".some-image");
// console.log(someImage.offsetWidth);
// console.log(someImage.offsetHeight);

// console.log(someImage.offsetLeft);
// console.log(someImage.offsetTop);

// let companiQuestion = confirm(
//   "Як пройшов останній переліт нашою авіакомпанією?"
// );

// let userAnswer;

// if (companiQuestion === true) {
//   alert("Ми раді, що вас сподобалося");
// } else {
//   userAnswer = prompt("напишіть що саме вам не сподобалося");

//   if (userAnswer !== null && userAnswer.trim() !== "") {
//     alert("Дякуємо вас за відповідь");
//   }

//   let ansverText = document.createElement(`div`);

//   ansverText.classList.add(".header__text");

//   ansverText.innerHTML = `<p>Ваша відповідь: <span>${userAnswer}</span></p>`;

//   const headerMenu = document.querySelector(".header__menu");

//   headerMenu.append(ansverText);
// }
//* Задача № 1
const bodyElem = document.body;

//* Задача № 2
const wrapper = document.querySelector(".wrapper");

function addList(num = 5, parentElement) {
  if (num && parentElement) {
    const ul = document.createElement("ul");

    for (let i = 1; i <= num; i++) {
      const li = document.createElement("li");
      li.textContent = `item ${i}`;

      ul.append(li);
    }
    parentElement.append(ul);
  }
}

addList(6, bodyElem);

//* Задача № 3

bodyElem.classList.add("loaded")
  ? bodyElem.classList.contains("loaded")
  : (bodyElem.style.color = "green");

//* Задача № 4
const elemItems = document.querySelectorAll(".item");

for (let i = 0; i < elemItems.length; i++) {
  const element = elemItems[i];
  element.classList.add("active");

  if (element.classList.contains("active")) {
    element.textContent = `Element № ${i + 1}`;
  }
}

//* Задача № 5
const button = document.querySelector(".button");

function scrollToButton() {
  button.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth",
  });
}
scrollToButton();
