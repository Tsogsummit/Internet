var backgrounds = [
    "https://source.unsplash.com/random/1600x900",
    "https://source.unsplash.com/random/1600x901",
    "https://source.unsplash.com/random/1600x902",
    "https://source.unsplash.com/random/1600x903",
    "https://source.unsplash.com/random/1600x904",
  ];
  var i = 0;
  setInterval(function () {
    document.body.style.backgroundImage = "url('" + backgrounds[i] + "')";
    i = (i + 1) % backgrounds.length;
  }, 5000);
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const ageInput = document.getElementById("age");
  const sexInput = document.getElementById("sex");
  const streetInput = document.getElementById("street");
  const countryInput = document.getElementById("country");
  const birthDateInput = document.getElementById("birthdate");
  const submitBtn = document.getElementById("submit-button");

  function checkForm() {
    if (
      firstNameInput.value &&
      lastNameInput.value &&
      ageInput.value &&
      sexInput.value &&
      streetInput.value &&
      countryInput.value &&
      birthDateInput.value
    ) {
      submitBtn.classList.remove("hidden");
    } else {
      submitBtn.classList.add("hidden");
    }
  }

  firstNameInput.addEventListener("input", checkForm);
  lastNameInput.addEventListener("input", checkForm);
  ageInput.addEventListener("input", checkForm);
  sexInput.addEventListener("input", checkForm);
  streetInput.addEventListener("input", checkForm);
  countryInput.addEventListener("input", checkForm);
  birthDateInput.addEventListener("input", checkForm);