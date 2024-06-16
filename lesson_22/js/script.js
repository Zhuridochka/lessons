"use strict";

// let result = 2 + (3 * 10) / "5";
// console.log(result);

// let num = 5;
// let result = 2 + (3 * 10) / ++num;

// console.log(result);

//* Оператори порівняння
// Повертають або true або false

// let result = 5 >= "3";
// console.log(result);
// console.log(typeof result);

// let result = 5 != "5";
// console.log(result);

// let result = 5 !== "5";
// console.log(result);

// let a = 6;
// let b = "6";
// let result = a === b;
// console.log(result);

// console.log(typeof a);
// console.log(typeof b);

//* Логічні оператори
// оператор ! - не (унарний - працює з однією складовою)

// let result = !0;
// let result = null;
// let result = !undefined;
// let result = NaN;

// console.log(typeof result);
// console.log(result);
// console.log(Boolean(result));

// if (!0) {
//   console.log("go to home");
// } else {
//   console.log("not go to home");
// }

// оператор || - або

// let a = "хліб";
// let b = "булка";

// if (!a || !b) {
//   console.log("продовжую вчитись");
// } else {
//   console.log("йду в АТБ");
// }
// console.log(typeof a);
// console.log(a);
// console.log(typeof b);
// console.log(b);

// console.log(result);
// console.log(Boolean(result));

// оператор && - та (і)

// let result = "хліб" && " ";

// if (result == false) {
//   console.log("йду на базар за недостаючим інгрідієнтом");
// } else {
//   console.log("відпочиваю");
// }

//* Умовне вітвлення
// if - якщо;
// else if  - тоді якщо;
// else - тоді;

// let numberOne = 5;
// let numberTwo = 30;

// let result =
//   numberOne <= numberTwo
//     ? `${numberOne} меньше за ${numberTwo}`
//     : `нічого не спрацювало`;
// console.log(result);

// if (numberOne > numberTwo) {
//   console.log(`${numberOne} більше за ${numberTwo}`);
// } else if (numberOne === 10) {
//   console.log(`${numberOne} дорівнює 10`);
// } else if (numberTwo === 20) {
//   console.log(`${numberTwo} дорівнює 30`);
// } else {
//   console.log(`нічого не спрацювало`);
// }

// if (numberOne < numberTwo) {
//   console.log(`${numberOne} більше за ${numberTwo}`);
// } else if (numberOne === 10) {
//   console.log(`numberOne дорівнює 10`);
// } else if (numberTwo === 30) {
//   console.log(`numberTwo дорівнює 20`);
// } else {
//   console.log(`Все пропало`);
// }

// console.log("Продовження коду відбувається далі....");

//* Оператор умови ?
// let someVar;
// if (10 > 5) {
//   someVar = "10 більше 5";
// } else {
//   someVar = "10 меньше 5";
// }
// console.log(someVar);

// let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";
// console.log(someVar);
// let userAge = 49;
// const userType = userAge > 40 ? `Вже мудрий` : `Ще наівний`;
// console.log(userType);

// const item = document.querySelector(".some-class");
// const animateSpeed = +item.dataset.speed || 500;
// console.log(animateSpeed);

//* Цикл for
// let someString = `Привіт! Як твоє життя?`;
// console.log(someString.length);
// console.log(typeof someString);

//for (let i = 0; i < someString.length; i++) {
// const element = someString[i];
//console.log(someString[i]);
//}

//* Цикл массиви []
// let someArray = [1, 2, 3, "abc", true, "56", NaN, undefined];
// console.log(Array.isArray(someArray));

// if (Array.isArray(someArray)) {

// }

// for (let i = 0; i < someArray.length; i++) {
//   const element = someArray[i];
//   // console.log(element);

//   if (element == 2) {
//     console.log(`${element} - це число меньше за 3`);
//   } else {
//     console.log(`${element} - це число більше за 3 або не є числом взагалі`);
//   }
// }

// let someArray = [1, 2, 3, "abc", true, "56", NaN, undefined];
// someArray.forEach((item, index) => {
//   console.log(index);
//   console.log(item);
// });

//* Додати елемент в кінець масиву
//let someArray = [1, 2, 3, "abc", true, "56", NaN, undefined];
// someArray.push(`Перемога`);
// console.log(someArray.includes("Перемога"));

// if (!someArray.includes("Перемога")) {
//   someArray.push(`Перемога`);
// }
// console.log(someArray);

/* !someArray.includes("56") ? someArray.push(`56`) : null;*/
//console.log(someArray);

//* З масива у рядок
// let someArray = [1, 2, 3, "abc", true, "56", NaN, undefined];
// let someString = someArray.join(", ");
// console.log(someString);

//* Об'єкти
// const user = {
//   age: 40,
//   name: "Iryna",
//   type: "IT",
// };
// console.log(user.type);
// console.log(user.name);
// console.log(user);

// const someStyles = {
//   color: "green",
//   ["font-size"]: 25,
// };
// console.log(someStyles["font-size"]);
// console.log(someStyles.color);

// someStyles["font-size"] = 30;
// console.log(someStyles["font-size"]);
// console.table(someStyles);

//* Функції

// showMessage();
// function showMessage() {
//   console.log(`I'm some text`);
// }

// showMessage();
// showMessage();
// showMessage();

//* Параметри функції
// function showMessage(someText = `Хочете отримувати повідомлення?`) {
// console.log(someText);
// alert(someText);
// }
// showMessage(`Нове повідомлення`);

// const numOne = 10;
// const numTwo = 30;

// function calcSum(a = 5, b = 3) {
//   return a + b;
// }
// function showMessage(someText = `Хочете отримувати повідомлення?`) {
//   console.log(someText);
// }
// calcSum(numOne, numTwo);
// showMessage(calcSum(253, numTwo));

//* Стрілочні функції
// let someName = (text = `Мій текст`) => console.log(text);
// someName();

// let someName = (text = `Мій текст`) => {
//   console.log(text);
//   console.log("another text");
// .......
// .......
// .......
// };
// someName();

//* Практика
// Текст з ефектом друку

// const someText = `Привіт! Це я - твоя анімація на js`;
// let template = ``;

// function initText(text) {
//   for (let i = 0; i < someText.length; i++) {
//     let item = someText[i];
//     // item = item === " " ? "&nbsp" : item;
//     template += `<span style='${
//       item === " " ? `display:inline;` : ""
//     } animation-delay: 0.${i * 0.1}s'>${item}</span>`;
//   }
// }
// initText(someText);

// Вивід у в'юпорт
// const page = document.querySelector(".page");
// page.insertAdjacentHTML("beforeend", template);

//* Практика (продовження)

// let someString = `Hello World 2024`;
// console.log(`Кількість символів: ${someString.length}`);

// for (let i = 0; i < someString.length; ++i) {
//   console.log(someString[i]);
// }

// let usersNames = ["Вася", "Петро", "Ілдика"];

// usersNames.forEach((usersName) => {
//   console.log(usersName);
// });

//=========Домашнеє завдання
//* Задача №1
let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}
//в консоль потрапить число 1

//* Задача №2
for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}

//* Задача №3
if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}

//* Задача №4
let result;

function divNum(a, b) {
  result = a / b;

  if (!Number.isNaN(result) && isFinite(result)) {
    console.log(`Результат ділення: ${result}`);
  } else if (b === 0) {
    console.log(`на нуль ділити не можна`);
  } else {
    console.log(`помилка у введені даних, ведіть два коректних значення`);
  }
}

divNum(15, 3);
divNum(25, 0);
divNum("12", 3);
divNum(20, "6");
divNum("cola", 2);
divNum("", "");
divNum(85, "pepsi");
divNum(NaN, Infinity);

//* Задача №5
const someArray = ["cola", 56, NaN, 10, undefined];
someArray.forEach((element, index) => {
  if (element === 10) {
    console.log(
      `Цей елемент масиву пройшов перевірку на відповідність числу 10`
    );
  } else {
    console.log(
      `Цей елемент масиву НЕ пройшов перевірку на відповідність числу 10`
    );
  }
});

// Другий варіант вирішення задачі без застосування циклу
if (someArray.includes(10)) {
  console.log(`Цей елемент масиву пройшов перевірку на відповідність числу 10`);
}

/*--------------*/

// console.log(isNaN(NaN));
