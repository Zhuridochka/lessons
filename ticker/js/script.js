// Для розблокування першої кнопки після натискання другої
function togglePointerEvents() {
  const element = document.getElementById("toggle-button");

  if (element.style.pointerEvents === "none") {
    element.style.pointerEvents = "auto";
    element.style.backgroundColor = "";
  } else {
    element.style.pointerEvents = "none";
    element.style.backgroundColor = "green";
  }
}
//==========================================
// Робимо кнопку активною після відправки заповненої
// форми (form)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const actionButton = document.getElementById("actionButton");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    // Перевіряємо чи форма валідна
    if (form.checkValidity()) {
      // Імітація відправки даних на сервер (можна замінити на реальну відправку)
      setTimeout(function () {
        // Робимо кнопку активною після успішної відправки форми
        actionButton.disabled = false;
        actionButton.classList.remove("disabled-button");
        actionButton.textContent = "Кнопка активна";
      }, 1000); // Імітуємо затримку на 1 секунду
    } else {
      form.reportValidity(); // Показуємо повідомлення про помилки валідації
    }
  });
});

//=======touch-button=========================
const button = document.getElementById("myButton");
console.log(button);

button.ontouchstart = function () {
  this.style.backgroundColor = "lightgreen";
  alert(`Кнопка була торкнута`);
};

//=====Повне використання сенсорних подій============

const touchArea = document.getElementById("touchArea");

touchArea.ontouchstart = function (e) {
  this.style.backgroundColor = "lightblue";
  this.innerText = "Touch Start";

  event.preventDefault();
};

touchArea.ontouchmove = function (e) {
  this.style.backgroundColor = "lightgray";
  this.innerText = "Touch Move";

  event.preventDefault();
};

touchArea.ontouchend = function (e) {
  this.style.backgroundColor = "lightgreen";
  this.innerText = "Touch End";

  event.preventDefault();
};

touchArea.ontouchcancel = function (e) {
  this.style.backgroundColor = "lightred";
  this.innerText = "Touch Cancel";

  event.preventDefault();
};

//=====preventDefault============

// document.getElementById("myLink").addEventListener("click", function (e) {
//   e.preventDefault();
//   alert(
//     `Посилання не працює оскільки до нього застосовується preventDefault()`
//   );
// });

document.getElementById("linkGoogle").addEventListener("click", function (e) {
  e.preventDefault();
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  event.preventDefault();
  alert(`Відправка форми заблокована`);
});

// Додавання класу search-open

// const buttonSearch = document.querySelector(".page__button-search");

// buttonSearch.addEventListener("click", createSearchOpen);

// function createSearchOpen() {
//   document.documentElement.classList.toggle("search-open");
// }

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  // const typeEvent = e.type;
  // const targetTag = targetElement.tagName;

  if (targetElement.closest(".page__button-search")) {
    document.documentElement.classList.toggle("search-open");
  } else if (!targetElement.closest(".page__block")) {
    document.documentElement.classList.remove("search-open");
  }
}
