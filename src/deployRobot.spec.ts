import { describe, it, expect } from "vitest";
import { deployRobot } from "./deployRobot";

describe("deployRobot", () => {
  it("should move forward correctly", () => {
    expect(deployRobot("1 1 N", "F")).toBe("1 2 N");
  });

  it("should turn right correctly", () => {
    expect(deployRobot("1 1 N", "R")).toBe("1 1 E");
  });

  it("should turn left correctly", () => {
    expect(deployRobot("1 1 N", "L")).toBe("1 1 W");
  });

  it("should handle multiple movements", () => {
    expect(deployRobot("1 1 E", "RFRFRFRF")).toBe("1 1 E");
  });

  it.skip("should handle moving out of bounds and return LOST", () => {
    expect(deployRobot("3 2 N", "FRRFLLFFRRFLL")).toBe("3 3 N LOST");
  });

  it("should not move if only turning commands are given", () => {
    expect(deployRobot("2 2 S", "RRLL")).toBe("2 2 S");
  });

  it("should ignore movements that would cause a fall if a scent is present", () => {
    const result1 = deployRobot("3 2 N", "FRRFLLFFRRFLL");
    expect(result1).toBe("3 3 N LOST");

    // Test that the scent prevents another robot from falling
    const result2 = deployRobot("0 3 W", "LLFFFLFLFL");
    expect(result2).toBe("2 3 S");
  });
});
