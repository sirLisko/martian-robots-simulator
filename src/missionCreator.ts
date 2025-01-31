import { createGrid } from "./gridManager";
import { deployRobot } from "./robotDeployer";

export const createMission = (
  grid: string,
): ((position: string, movements: string) => string) => {
  const gridData = createGrid(grid);

  return (position: string, movements: string) =>
    deployRobot(gridData, position, movements);
};
