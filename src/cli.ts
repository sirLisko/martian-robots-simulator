import prompts from "prompts";
import { createMission } from "./missionCreator";
import { GridSchema, MovementsSchema, PositionSchema } from "./schemas";

export const runCLI = async (): Promise<void> => {
  console.log("Welcome to the Martian Robots Simulator!");

  const gridResponse = await prompts({
    type: "text",
    name: "grid",
    message: "Enter the grid size (e.g., '5 3'):",
    validate: (value) => {
      const result = GridSchema.safeParse(value);
      return result.success ? true : result.error.errors[0].message;
    },
  });

  const deployRobot = createMission(gridResponse.grid);

  let continueSimulation = true;
  while (continueSimulation) {
    const positionResponse = await prompts({
      type: "text",
      name: "position",
      message: "Enter the robot's initial position (e.g., '1 1 E'):",
      validate: (value) => {
        const result = PositionSchema.safeParse(value);
        return result.success ? true : result.error.errors[0].message;
      },
    });

    const movementsResponse = await prompts({
      type: "text",
      name: "movements",
      message: "Enter the robot's movements (e.g., 'RFRFRFRF'):",
      validate: (value) => {
        const result = MovementsSchema.safeParse(value);
        return result.success ? true : result.error.errors[0].message;
      },
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
