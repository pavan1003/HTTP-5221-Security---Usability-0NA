describe("Test guessNum Function", function () {
  describe("guessNum Test to PASS", function () {
    it("Should return string 'You guessed it!' for secret number 4", function () {
      var testNum = 4;
      expect(guessNum(testNum)).toEqual("You guessed it!");
    });
    it("Should return string 'Guess again.' for valuve betweeen 1 to 10 inclusive", function () {
      var testNum = 5;
      expect(guessNum(testNum)).toEqual("Guess again.");
    });
  });
  describe("guessNum Test to FAIL", function () {
    it("Should return string 'A number was not input.' for value is not a number", function () {
      var testNum = "four";
      expect(guessNum(testNum)).toEqual("A number was not input.");
    });
    it("Should return string 'A value was not entered.' for empty input", function () {
      var testNum = "";
      expect(guessNum(testNum)).toEqual("A value was not entered.");
    });
    it("Should return string 'Way off!!!! Pick between 1 and 10.' for value outside 1 to 10", function () {
      var testNum = 44; 
      expect(guessNum(testNum)).toEqual("Way off!!!! Pick between 1 and 10.");
    });
  });
  describe("guessNum Boundary tests ", function () {
    it("Should return string 'Way off!!!! Pick between 1 and 10.' for guess 0", function () {
      var testNum = 0;
      expect(guessNum(testNum)).toEqual("Way off!!!! Pick between 1 and 10.");
    });
    it("Should return string 'Guess again.' for guess number 1", function () {
      var testNum = 1;
      expect(guessNum(testNum)).toEqual("Guess again.");
    });
    it("Should return string 'Guess again.' for guess number 2", function () {
      var testNum = 2;
      expect(guessNum(testNum)).toEqual("Guess again.");
    });
    it("Should return string 'Way off!!!! Pick between 1 and 10.' for guess number 11", function () {
      var testNum = 11; 
      expect(guessNum(testNum)).toEqual("Way off!!!! Pick between 1 and 10.");
    });
    it("Should return string 'Guess again.' for guess number 10", function () {
        var testNum = 10;
        expect(guessNum(testNum)).toEqual("Guess again.");
      });
    it("Should return string 'Guess again.' for guess number 9", function () {
        var testNum = 9;
        expect(guessNum(testNum)).toEqual("Guess again.");
      });
  });
});
