/**
 * Check Login Function to validate login credentials provided by user input.
 * @param {string} username
 * @param {string} password
 * @return {boolean|string} true if credentials are valid, otherwise an error message
 */
function checkLogin(username, password) {
  const validUsername = "pavan"; // known username
  const validPassword = "pavanlovesJS"; //known password
  const validMD5Password = md5Encrypt(validPassword);
  const MD5Password = md5Encrypt(password);

  //Check username is entered or not
  if (!username) {
    return "No username entered.";
    //Check password is entered or not
  } else if (!password) {
    return "No password entered.";
    //Check username and password validity
  } else if (username !== validUsername || MD5Password !== validMD5Password) {
    return "Invalid Username or Password.";
  } else return true;
}
