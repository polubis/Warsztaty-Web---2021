import { required } from "./validators";

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
