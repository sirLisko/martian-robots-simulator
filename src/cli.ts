import prompts from "prompts";
import { createMission } from "./missionCreator";

export const runCLI = async (): Promise<void> => {
  console.log("Welcome to the Martian Robots Simulator!");

  const gridResponse = await prompts({
    type: "text",
    name: "grid",
    message: "Enter the grid size (e.g., '5 3'):",
    validate: (value) =>
      /^\d+\s\d+$/.test(value)
        ? true
        : "Grid must be in the format '<number> <number>'",
  });

  const deployRobot = createMission(gridResponse.grid);

  let continueSimulation = true;
  while (continueSimulation) {
    const positionResponse = await prompts({
      type: "text",
      name: "position",
      message: "Enter the robot's initial position (e.g., '1 1 E'):",
      validate: (value) =>
        /^\d+\s*\d+\s*[NESW]$/i.test(value)
          ? true
          : "Position must be in the format '<number> <number> <direction>'",
    });

    const movementsResponse = await prompts({
      type: "text",
      name: "movements",
      message: "Enter the robot's movements (e.g., 'RFRFRFRF'):",
      validate: (value) =>
        /^[RLF]+$/i.test(value)
          ? true
          : "Movements can only contain 'R', 'L', or 'F'",
    });

    const result = deployRobot(
      positionResponse.position,
      movementsResponse.movements,
    );
    console.log("\nRobot's final position:");
    console.log(result);

    const continueResponse = await prompts({
      type: "confirm",
      name: "continue",
      message: "Do you want to deploy another robot?",
    });

    continueSimulation = continueResponse.continue;
  }

  console.log("Thank you for using the Martian Robots Simulator!");
};
