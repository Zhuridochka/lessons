const phoneInput = document.getElementById("phone-input");

phoneInput.addEventListener("input", function () {
  const phoneNumber = phoneInput.value;
  if (!phoneNumber.match(/^\+380[0-9]{9}$/)) {
    phoneInput.setCustomValidity(
      'Номер телефону повинен починатися з "+380" і мати 9 цифр після цього префіксу'
    );
  } else {
    phoneInput.setCustomValidity("");
  }
});
