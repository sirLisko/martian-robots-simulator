import { describe, it, expect, vi, beforeEach } from "vitest"; // Vitest imports
import { createMission } from "./missionCreator";
import { createGrid } from "./gridManager";
import { deployRobot } from "./robotDeployer";

vi.mock("./gridManager");
vi.mock("./robotDeployer");

const mockCreateGrid = createGrid as typeof createGrid &
  ReturnType<typeof vi.fn>;
const mockDeployRobot = deployRobot as typeof deployRobot &
  ReturnType<typeof vi.fn>;

describe("createMission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should create a mission and return a function that deploys a robot", () => {
    const grid = "5 5";
    const position = "1 2 N";
    const movements = "LMLMLMLMM";
    const expectedResult = "1 3 N";

    const mockGridData = { width: 5, height: 5 };
    mockCreateGrid.mockReturnValue(mockGridData);
    mockDeployRobot.mockReturnValue(expectedResult);

    const deployRobot = createMission(grid);
    const result = deployRobot(position, movements);

    expect(mockCreateGrid).toHaveBeenCalledWith(grid);
    expect(mockDeployRobot).toHaveBeenCalledWith(
      mockGridData,
      position,
      movements,
    );
    expect(result).toBe(expectedResult);
  });
});
