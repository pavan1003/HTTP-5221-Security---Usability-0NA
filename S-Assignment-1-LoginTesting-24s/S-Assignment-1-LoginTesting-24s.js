window.onload = function () {
  "use strict";

  //Variables
  var formHandle = document.forms.login;
  var inputUser = formHandle.username;
  var inputPass = formHandle.password;
  var output = document.getElementById("output");

  //Listeners
  formHandle.onsubmit = processForm;

  /**
   * Function to handle the form submission event.
   * This function processes the login form, validates the user credentials and displays the relevent Text to DOM,
   * and updates the UI with a welcome message or an error message based on the validation result.
   * 
   * @return {boolean} Returns false to prevent the default form submission behavior and page reload.
   */
  function processForm() {
    var checkLoginResponse = checkLogin(inputUser.value, inputPass.value);
    output.style.display = "block";
    if (checkLoginResponse === true) {
      output.innerHTML = "Welcome back!";
    } else {
      output.innerHTML = checkLoginResponse;
    }
    return false;
  }
};
