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
//let selectedCategories = ["all"];

// шукаємо усі елементи (кнопки) з класом filter-button
// document.querySelectorAll(".navigation-newsletter__item").forEach((button) => {
//   button.addEventListener("click", () => {
//     let category = button.dataset.filter;
//     if (category === "all") {
//       selectedCategories = ["all"];
//       setActiveButtons(selectedCategories);
//     } else {
//       let index = selectedCategories.indexOf(category);
//       if (index > -1) {
//         selectedCategories.splice(index, 1);
//       } else {
//         selectedCategories.push(category);
//       }
//       // Видаляємо 'all' з масиву, якщо вибрано хоча б одну категорію
//       if (selectedCategories.length > 0) {
//         let allIndex = selectedCategories.indexOf("all");
//         if (allIndex > -1) {
//           selectedCategories.splice(allIndex, 1);
//         }
//       }
//       setActiveButtons(selectedCategories);
//     }
//     filterProducts(selectedCategories);
//   });
// });

// function filterProducts(categories) {
//   //   знаходимо усі елементи з класом product (картка товару)
//   let products = document.querySelectorAll(".newsletter-section__column");
//   products.forEach((product) => {
//     if (
//       categories.includes("all") ||
//       categories.some((category) => product.dataset.category.includes(category))
//     ) {
//       product.classList.add("show");
//     } else {
//       product.classList.remove("show");
//     }
//   });
// }

// функція для додавання та усунення класу active до вибраних кнопок filter-button
// function setActiveButtons(categories) {
//   let buttons = document.querySelectorAll(".navigation-newsletter__item");
//   buttons.forEach((button) => {
//     if (categories.includes(button.dataset.filter)) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// }

//==========Функція Filter декількох різних секцій сайту================

document.querySelectorAll("[data-filter-group]").forEach((block) => {
  let selectedCategories = ["all"];

  block.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      let category = button.dataset.filter;

      // Перевірка, чи була натиснута вже активна кнопка
      if (button.classList.contains("active") && category !== "all") {
        selectedCategories = selectedCategories.filter(
          (cat) => cat !== category
        );
        if (selectedCategories.length === 0) {
          selectedCategories = ["all"];
        }
        setActiveButtons(block, selectedCategories);
        filterProducts(block, selectedCategories);
        return;
      }

      if (category === "all") {
        selectedCategories = ["all"];
      } else {
        let index = selectedCategories.indexOf(category);
        if (index > -1) {
          selectedCategories.splice(index, 1);
        } else {
          selectedCategories.push(category);
        }
        // Якщо вибрана хоча б одна категорія, видаляємо 'all'
        if (selectedCategories.length > 0) {
          let allIndex = selectedCategories.indexOf("all");
          if (allIndex > -1) {
            selectedCategories.splice(allIndex, 1);
          }
        }
      }

      setActiveButtons(block, selectedCategories);
      filterProducts(block, selectedCategories);
    });
  });

  function filterProducts(block, categories) {
    let products = block.querySelectorAll("[data-category]");
    console.log(products);
    products.forEach((product) => {
      if (
        categories.includes("all") ||
        categories.some((category) =>
          product.dataset.category.includes(category)
        )
      ) {
        product.classList.add("show");
      } else {
        product.classList.remove("show");
      }
    });
  }

  function setActiveButtons(block, categories) {
    let buttons = block.querySelectorAll("[data-filter]");
    buttons.forEach((button) => {
      if (categories.includes(button.dataset.filter)) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }
});
