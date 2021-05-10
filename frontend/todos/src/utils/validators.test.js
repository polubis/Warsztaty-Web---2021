import { required, min } from "./validators";

describe("required()", () => {
  describe("for string argument", () => {
    it("returns truthy for empty string", () => {
      expect(required("")).toBe(true);
    });

    it("returns falsy for non empty string", () => {
      expect(required("d")).toBe(false);
    });
  });

  describe("for array argument", () => {
    it("returns truthy for empty array", () => {
      expect(required([])).toBe(true);
    });

    it("returns falsy for non empty array", () => {
      expect(required(["d"])).toBe(false);
    });
  });

  describe("for object argument", () => {
    it("returns truthy for empty object", () => {
      expect(required({})).toBe(true);
    });

    it("returns falsy for non empty object", () => {
      expect(required({ id: "10" })).toBe(false);
    });
  });

  describe("for other value types", () => {
    it("returns truthy for null", () => {
      expect(required(null)).toBe(true);
    });
    it("returns truthy for undefined", () => {
      expect(required(undefined)).toBe(true);
    });
  });
});

describe("min()", () => {
  describe("for number value", () => {
    it("returns correct result", () => {
      expect(min(3)(3)).toBe(true);
      expect(min(3)(4)).toBe(true);
      expect(min(3)(2)).toBe(false);
    });
  });

  describe("for string value", () => {
    it("returns correct result", () => {
      expect(min(3)("ddd")).toBe(true);
      expect(min(3)("dddd")).toBe(true);
      expect(min(3)("dd")).toBe(false);
    });
  });

  describe("for array value", () => {
    it("returns correct result", () => {
      expect(min(3)(["", "", ""])).toBe(true);
      expect(min(3)(["", "", "", ""])).toBe(true);
      expect(min(3)(["", ""])).toBe(false);
    });
  });

  describe("for object value", () => {
    it("returns correct result", () => {
      expect(min(3)({ 1: 1, 2: 2, 3: 3 })).toBe(true);
      expect(min(3)({ 1: 1, 2: 2, 3: 3, 4: 4 })).toBe(true);
      expect(min(3)({ 1: 1, 2: 2 })).toBe(false);
    });
  });

  describe("for other values", () => {
    it("returns correct result", () => {
      expect(min(3)(undefined)).toBe(false);
      expect(min(3)(null)).toBe(false);
    });
  });
});
