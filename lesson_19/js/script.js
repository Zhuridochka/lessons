//================================
// burger-menu
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  // .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open
  if (targetElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
    e.preventDefault();
  }
});
//=================================================
// JavaScript
let selectedCategories = ["all"];

// шукаємо усі елементи (кнопки) з класом filter-button
document.querySelectorAll(".navigation-newsletter__item").forEach((button) => {
  button.addEventListener("click", () => {
    let category = button.dataset.filter;
    if (category === "all") {
      selectedCategories = ["all"];
      setActiveButtons(selectedCategories);
    } else {
      let index = selectedCategories.indexOf(category);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      } else {
        selectedCategories.push(category);
      }
      // Видаляємо 'all' з масиву, якщо вибрано хоча б одну категорію
      if (selectedCategories.length > 0) {
        let allIndex = selectedCategories.indexOf("all");
        if (allIndex > -1) {
          selectedCategories.splice(allIndex, 1);
        }
      }
      setActiveButtons(selectedCategories);
    }
    filterProducts(selectedCategories);
  });
});

function filterProducts(categories) {
  //   знаходимо усі елементи з класом product (картка товару)
  let products = document.querySelectorAll(".newsletter-section__column");
  products.forEach((product) => {
    if (
      categories.includes("all") ||
      categories.some((category) => product.dataset.category.includes(category))
    ) {
      product.classList.add("show");
    } else {
      product.classList.remove("show");
    }
  });
}

// функція для додавання та усунення класу active до вибраних кнопок filter-button
function setActiveButtons(categories) {
  let buttons = document.querySelectorAll(".navigation-newsletter__item");
  console.log(buttons);
  buttons.forEach((button) => {
    if (categories.includes(button.dataset.filter)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
