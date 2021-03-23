const Manager = require("./manager");
describe("Manager", () => {
  describe("Initialization", () => {
    test("Can initialize a Manager object", () => {
      const e = new Manager();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Bill";
      const e = new Manager(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 66;
      const e = new Manager("Bill", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "brt.jst@gmail.com";
      const e = new Manager("Bill", 66, email);
      expect(e.email).toBe(email);
    });
    test("Can set  attribute with constructor", () => {
        const officeNumber = "101";
        const e = new Manager("Bill", 66, "brt.jst@gmail.com");
        expect(e.officeNumber).toBe("brt.jst@gmail.com");
      });
  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Bill";
      const e = new Manager(name, 66, "brt.jst@gmail.com");
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 66;
      const e = new Manager("Bill", id, "brt.jst@gmail.com");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "brt.jst@gmail.com";
      const e = new Manager("Bill", 66, email);
      expect(e.getEmail()).toBe(email);
    });
    test("Can get office number via get() method", () => {
        const officeNumber = 101;
        const e = new Manager("Bill", 66, "brt.jst@gmail.com");
        expect(e.getOfficeNumber()).toBe(officeNumber);
      });
    test("Can get position via getPosition() method", () => {
      const e = new Manager("Bill", 66, "brt.jst@gmail.com");
      expect(e.getPosition()).toBe("Manager");
    });
  });
});