//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========

//function to test function checkHumberId
function test__checkHumberId(valueIn, expected) {
    "use strict";
    let result = checkHumberId(valueIn);
    let msg = "Value tested: " + valueIn + " Expected result: " + result;
    if (result === expected) {
        msg += "<span class='passed'> ==PASSED==</span><br>";
    } else {
        msg += "<span class='failed'> xxFAILEDxx</span><br>";
    }

    let data = document.getElementById("data");
    data.innerHTML += msg;
}

test__checkHumberId("xn12345678", false); //TEST TO PASS 
test__checkHumberId("n12345678", true); //TEST TO PASS
test__checkHumberId("N12345678", true); //TEST TO PASS
test__checkHumberId("x12345678", false); //TEST TO PASS
test__checkHumberId(null, false); //TEST TO PASS
test__checkHumberId(undefined, false); //TEST TO PASS
test__checkHumberId(true, false); //TEST TO PASS
test__checkHumberId("n1234567", false); //TEST TO PASS BOUNDRY TESTING
test__checkHumberId("n123456789", false); //TEST TO PASS
test__checkHumberId("n99999999", true); //TEST TO PASS
test__checkHumberId("n00000000", true); //TEST TO PASS
test__checkHumberId("ASFASDF", true); //TEST TO FAIL
