// Amal Kariyawasam, 2024
console.log("Script Loaded");

function checkCountry() {
  const selectCountry = document.querySelector("#countryName");
  selectCountry.addEventListener("input", (event) => {
    if (selectCountry.validity.valid) {
      console.log(selectCountry.value);
      selectCountry.style.backgroundColor = "#40e716";

      return true;
    } else if (selectCountry.value === "selectCountry") {
      console.log("Country value invalid");
    }
  });
}

function postCodeCheck() {
  const selectPostCode = document.querySelector("#postCodes");
  const postCodeError = document.querySelector("#postCodes + span.status");

  let isPostCodeValid = selectPostCode.validity.valid;

  selectPostCode.addEventListener("input", (event) => {
    isPostCodeValid = selectPostCode.validity.valid;
    const postCodes = {
      vic: [
        /^3[0-9]{3}$/,
        "Post Code format Wrong, Victorian Post Codes need to be 4 digits from 3000 to 3999",
      ],
    };

    const constraint = postCodes["vic"][0];

    console.log(constraint);

    if (constraint.test(selectPostCode.value.toString())) {
      selectPostCode.style.backgroundColor = "#aeffa0";
      postCodeError.innerText = "Post Code format Correct";

      isPostCodeValid = true;
    } else {
      selectPostCode.style.backgroundColor = "#ff76a4";
      postCodeError.innerText =
        "Post Code format Wrong, Victorian Post Codes need to be 4 digits from 3000 to 3999";

      isPostCodeValid = false;
    }
  });
  return isPostCodeValid;
}

function emailAddressCheck() {
  const selectEmailAddress = document.querySelector("#emailAddress");
  const emailAddressError = document.querySelector(
    "#emailAddress + span.status"
  );

  let validEmailAddress = selectEmailAddress.validity.valid;

  selectEmailAddress.addEventListener("input", (event) => {
    validEmailAddress = selectEmailAddress.validity.valid;

    if (validEmailAddress) {
      emailAddressError.innerText = "Valid Email Address";
      validEmailAddress = true;
    } else if (selectEmailAddress.validity.typeMismatch) {
      emailAddressError.innerText = "E-Mail address format not Correct";
      // selectEmailAddress.setCustomValidity("I am expecting an email address!");
      // selectEmailAddress.reportValidity();
      validEmailAddress = false;
    } else {
      emailAddressError.innerText = "Invalid Email Address";
      validEmailAddress = false;
    }
  });
  return validEmailAddress;
}

function passwordCheck() {
  const selectPasswordInitial = document.querySelector("#passwordInitial");
  const errorPasswordInitial = document.querySelector(
    "#passwordInitial+ span.status"
  );

  const selectPasswordRepeat = document.querySelector("#passwordConfirmation");
  const errorPasswordRepeat = document.querySelector(
    "#passwordConfirmation + span.status"
  );

  if (selectPasswordInitial.value === selectPasswordRepeat.value) {
    selectPasswordInitial.style.backgroundColor = "#aeffa0";
    selectPasswordRepeat.style.backgroundColor = "#aeffa0";

    errorPasswordInitial.innerText = "Passwords Match and OK to proceed";
    errorPasswordRepeat.innerText = "Passwords Match and OK to proceed";

    return true;
  } else {
    selectPasswordInitial.style.backgroundColor = "#ff76a4";
    selectPasswordRepeat.style.backgroundColor = "#ff76a4";

    errorPasswordInitial.innerText = "Passwords Do Not Match";
    errorPasswordRepeat.innerText = "Passwords Do Not Match";

    return false;
  }
}

function submitForm() {
  const buttonSelect = document.querySelector("#submitButton");
  const statusButtonSelect = document.querySelector(
    "#submitButton + span.status"
  );

  buttonSelect.addEventListener("click", () => {
    if (postCodeCheck() && emailAddressCheck() && passwordCheck()) {
      statusButtonSelect.innerText = "High Five, Form Submitted Successfully!";
      console.log("All inputs valid");
    } else {
      console.log("All Input NOT Valid");
      statusButtonSelect.innerText =
        "ERROR ! Form NOT Submitted, Please correct the highlighted errors";
    }
  });
}

submitForm();
postCodeCheck();
