describe("Test md5Encrypt Function", function () {
  describe("md5Encrypt Test to PASS", function () {
    const password = md5Encrypt("pavanlovesJS");
    it("should return an string to match 32 characters for password pavanlovesJS", function () {
      expect(password).toMatch(/^[a-f0-9]{32}$/);
    });
    it("should return an string '852265d3c2d30fd63d66d3577780872a' for password pavanlovesJS", function () {
      expect(password).toEqual("852265d3c2d30fd63d66d3577780872a");
    });
  });
});

describe("Test checkLogin Function", function () {
  describe("checkLogin Test to PASS", function () {
    it("should return 'true' for correct credentials", function () {
      expect(checkLogin("pavan", "pavanlovesJS")).toEqual(true);
    });
  });
  describe("checkLogin Tests to FAIL", function () {
    it("should return 'No username entered.' for no username input", function () {
      expect(checkLogin("", "password")).toEqual("No username entered.");
    });
    it("should return 'No password entered.' for no password input", function () {
      expect(checkLogin("pavan", "")).toEqual("No password entered.");
    });
    it("should return 'Invalid Username or Password.' for incorrect username input and correct password", function () {
      expect(checkLogin("sean", "pavanlovesJS")).toEqual("Invalid Username or Password.");
    });
    it("should return 'Invalid Username or Password.' for correct username input and incorrect password", function () {
      expect(checkLogin("pavan", "pavanhatesJS")).toEqual("Invalid Username or Password.");
    });
    it("should return 'No username entered.' for null username", function () {
      expect(checkLogin(null, "pavanlovesJS")).toEqual("No username entered.");
    });
    it("should return 'No username entered.' for undefined username", function () {
      expect(checkLogin(undefined, "pavanlovesJS")).toEqual("No username entered.");
    });
    it("should return 'No password entered.' for null password", function () {
      expect(checkLogin("pavan", null)).toEqual("No password entered.");
    });
    it("should return 'No password entered.' for undefined password", function () {
      expect(checkLogin("pavan", undefined)).toEqual("No password entered.");
    });
  });
});
