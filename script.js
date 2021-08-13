var submitBtn = document.querySelector("#submit");
var inputs = document.querySelectorAll("#input");
var firstName = document.getElementsByName("first-name")[0];
var lastName = document.getElementsByName("last-name")[0];
var email = document.getElementsByName("email")[0];
var password = document.getElementsByName("password")[0];

var checkSubmit = () => {
    if (firstName.validity.valueMissing) {
        document.querySelector(".first").innerHTML = "First Name cannot be empty";
        firstName.setAttribute("placeholder", "");
        firstName.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";
    } else {
        document.querySelector(".first").innerHTML = "";
        firstName.style.background = "";
    }
    
    if (lastName.validity.valueMissing) {
        document.querySelector(".last").innerHTML = "Last Name cannot be empty";
        lastName.setAttribute("placeholder", "");
        lastName.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";

    } else  {
        document.querySelector(".last").innerHTML = "";
        lastName.style.background = "";
    }

    if (email.validity.typeMismatch) {
        document.querySelector(".email").innerHTML = "Looks like this is not an email";
        email.setAttribute("placeholder", "");
        email.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";

    } else if (email.validity.valueMissing) {
        document.querySelector(".email").innerHTML = "Email cannot be empty";
        email.setAttribute("placeholder", "");
        email.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";
    } else {
        document.querySelector(".email").innerHTML = "";
        email.style.background = "";
    }

    if (password.validity.valueMissing) {
        document.querySelector(".password").innerHTML = "Password cannot be empty";
        password.setAttribute("placeholder", "");
        password.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";
    } else if (password.validity.tooShort) {
        document.querySelector(".password").innerHTML = "Min 8 characters password";
        password.setAttribute("placeholder", "");
        password.style.background = "url('images/icon-error.svg') no-repeat 98% 50%";
    } else  {
        document.querySelector(".password").innerHTML = "";
        password.style.background = "";
    }
}


submitBtn.addEventListener("click", checkSubmit);
firstName.addEventListener("input", checkSubmit);
lastName.addEventListener("input", checkSubmit);
email.addEventListener("input", checkSubmit);
password.addEventListener("input", checkSubmit);
