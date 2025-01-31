import { describe, expect, it } from "vitest";
import { calculateNextPosition } from "./positionCalculator";

describe("calculateNextPosition", () => {
  it("should return the correct next position for each direction", () => {
    expect(calculateNextPosition(0, 0, 0)).toEqual([0, 1]); // N
    expect(calculateNextPosition(0, 0, 1)).toEqual([1, 0]); // E
    expect(calculateNextPosition(0, 0, 2)).toEqual([0, -1]); // S
    expect(calculateNextPosition(0, 0, 3)).toEqual([-1, 0]); // W
  });

  it("should throw an error for an invalid direction", () => {
    expect(() => calculateNextPosition(0, 0, -1)).toThrow();
  });
});
