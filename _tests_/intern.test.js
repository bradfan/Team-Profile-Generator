const Intern = require("../lib/intern");
describe("Intern", () => {
  describe("Initialization", () => {
    test("Can initialize an intern object", () => {
      const e = new Intern();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Bill";
      const e = new Intern(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 66;
      const e = new Intern("Bill", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "brt.jst@gmail.com";
      const e = new Intern("Bill", 66, email);
      expect(e.email).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
        const school = "U of A";
        const e = new Intern("Bill", 66, "brt.jst@gmail.com",school);
        expect(e.school).toBe("U of A");
      });
  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Bill";
      const e = new Intern(name, 66, "brt.jst@gmail.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 66;
      const e = new Intern("Bill", id, "brt.jst@gmail.com");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "brt.jst@gmail.com";
      const e = new Intern("Bill", 66, email);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get school via get() method", () => {
        const school = "U of A";
        const e = new Intern("Bill", 66, "brt.jst@gmail.com",school);
        expect(e.getSchool()).toBe(school);
      });
    test("Can get position via getPosition() method", () => {
      const e = new Intern("Bill", 66, "brt.jst@gmail.com");
      expect(e.getPosition()).toBe("Intern");
    });
  });
});