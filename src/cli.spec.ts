import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { runCLI } from "./cli";
import prompts from "prompts";

vi.mock("prompts", () => ({
  default: vi.fn(),
}));

describe("runCLI", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let consoleLogSpy: any;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should deploy a robot and display the final position", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (prompts as any)
      .mockResolvedValueOnce({ grid: "5 3" })
      .mockResolvedValueOnce({ position: "1 1 E" })
      .mockResolvedValueOnce({ movements: "RFRFRFRF" })
      .mockResolvedValueOnce({ continue: false });

    await runCLI();

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Welcome to the Martian Robots Simulator!",
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("\nRobot's final position:");
    expect(consoleLogSpy).toHaveBeenCalledWith("1 1 E");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Thank you for using the Martian Robots Simulator!",
    );
  });
});
