"use strict";

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
const elemItems = document.querySelectorAll(".page__item");

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
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}
scrollToButton();

console.log(button.getBoundingClientRect().top);

//* Задача № 6
const link = document.querySelector(".link");

// link.dataset.width = "100";
let atributeValue = link.dataset.width;

atributeValue < 200
  ? (link.style.color = "red")
  : (link.style.color = "inherit");

console.log(link.getAttribute("width"));
