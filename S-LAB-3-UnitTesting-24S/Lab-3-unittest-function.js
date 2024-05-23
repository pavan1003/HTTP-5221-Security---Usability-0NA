//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number (n or N followed by 8 digits).
 * Returns true if input validates, otherwise returns false.
 * @param {string} idIn
 */
function checkHumberId(humberIdIn) {
    "use strict";
    let isIdValid = false;
    var humberIdRegEx = /^(n|N)\d{8}$/;
    if (humberIdRegEx.test(humberIdIn)) {
        isIdValid = true;
    }
    return isIdValid;
}
