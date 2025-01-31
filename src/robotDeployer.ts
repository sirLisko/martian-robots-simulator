import { DIRECTIONS } from "./constants";
import { GridData } from "./gridManager";
import { calculateNextPosition } from "./positionCalculator";
import { MovementsSchema, PositionSchema } from "./schemas";

export const deployRobot = (
  grid: GridData,
  position: string,
  movements: string,
): string => {
  const positionValidation = PositionSchema.safeParse(position);
  if (!positionValidation.success) {
    throw new Error(positionValidation.error.errors[0].message);
  }

  const movementsValidation = MovementsSchema.safeParse(movements);
  if (!movementsValidation.success) {
    throw new Error(movementsValidation.error.errors[0].message);
  }

  const { isOutOfBounds, scent } = grid;
  let { x: currentX, y: currentY } = positionValidation.data;
  const { direction } = positionValidation.data;
  let currentDirection = DIRECTIONS.indexOf(direction);

  for (const movement of movements) {
    if (movement === "R") {
      currentDirection = (currentDirection + 1) % DIRECTIONS.length;
    } else if (movement === "L") {
      currentDirection =
        (currentDirection + DIRECTIONS.length - 1) % DIRECTIONS.length;
    } else if (movement === "F") {
      const [nextX, nextY] = calculateNextPosition(
        currentX,
        currentY,
        currentDirection,
      );

      if (isOutOfBounds(nextX, nextY)) {
        if (!scent.has(`${currentX} ${currentY}`)) {
          scent.add(`${currentX} ${currentY}`);
          return `${currentX} ${currentY} ${DIRECTIONS[currentDirection]} LOST`;
        }
      } else {
        [currentX, currentY] = [nextX, nextY];
      }
    }
  }

  return `${currentX} ${currentY} ${DIRECTIONS[currentDirection]}`;
};
