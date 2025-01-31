import { describe, it, expect } from "vitest";
import { createGrid } from "./gridManager";

describe("createGrid", () => {
  it("should parse grid dimensions correctly", () => {
    const { gridX, gridY } = createGrid("10 15");
    expect(gridX).toBe(10);
    expect(gridY).toBe(15);
  });

  it("should throw an error for invalid grid input", () => {
    expect(() => createGrid("151 1")).toThrow(
      'Grid must be in the format "<number> <number>" and must be less than or equal to 50',
    );
  });

  describe("isOutOfBounds", () => {
    it("should return true for out-of-bounds coordinates", () => {
      const { isOutOfBounds } = createGrid("5 5");
      expect(isOutOfBounds(-1, 0)).toBe(true);
      expect(isOutOfBounds(0, -1)).toBe(true);
      expect(isOutOfBounds(6, 0)).toBe(true);
      expect(isOutOfBounds(0, 6)).toBe(true);
    });

    it("should return false for in-bounds coordinates", () => {
      const { isOutOfBounds } = createGrid("5 5");
      expect(isOutOfBounds(0, 0)).toBe(false);
      expect(isOutOfBounds(5, 5)).toBe(false);
    });
  });
});
