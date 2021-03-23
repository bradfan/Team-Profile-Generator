const Engineer = require("./engineer");
describe("Manager", () => {
  describe("Initialization", () => {
    test("Can initialize an engineer object", () => {
      const e = new Engineer();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Bill";
      const e = new Engineer(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 66;
      const e = new Engineer("Bill", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "brt.jst@gmail.com";
      const e = new Engineer("Bill", 66, email);
      expect(e.email).toBe(email);
    });
    test("Can set Github User Name attribute with constructor", () => {
        const gitHubUserName = "bilbo";
        const e = new Engineer("Bill", 66, "brt.jst@gmail.com",gitHubUserName);
        expect(e.getGitHubUserName()).toBe("bilbo");
      });
  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Bill";
      const e = new Engineer(name, 66, "brt.jst@gmail.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 66;
      const e = new Engineer("Bill", id, "brt.jst@gmail.com");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "brt.jst@gmail.com";
      const e = new Engineer("Bill", 66, email);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get Github User Name via get() method", () => {
        const gitHubUserName = "bilbo";
        const e = new Engineer("Bill", 66, "brt.jst@gmail.com", "bilbo");
        expect(e.getGitHubUserName()).toBe(gitHubUserName);
      });
    test("Can get position via getPosition() method", () => {
      const e = new Engineer("Bill", 66, "brt.jst@gmail.com");
      expect(e.getPosition()).toBe("Engineer");
    });
  });
});