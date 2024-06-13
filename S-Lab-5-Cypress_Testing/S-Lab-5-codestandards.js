window.onload = function () {
    "use strict";
    //Variables
    var form__handle = document.querySelector(".login");
    var input__user = document.querySelector(".login__username");
    var input__pass = document.querySelector(".login__password");
    var output__user = document.querySelector(".output__user");
    var output__pass = document.querySelector(".output__pass");
    var output = document.querySelector(".output");
    //Listeners
    form__handle.onsubmit = processForm;
    //Functions
    function processForm() {
        // username validation
        if (input__user.value === "") {
            input__user.classList.add("login__txtbox_error");
            input__user.focus();
            return false;
        }
        // password validation
        if (input__pass.value === "") {
            input__pass.classList.add("login__txtbox_error");
            input__pass.focus();
            return false;
        }
        output.style.display = "block";
        output__user.innerHTML = input__user.value;
        output__pass.innerHTML = input__pass.value;
        return false;
    }
};
