import { Direction, DIRECTIONS } from "./constants";
import { GridData } from "./gridManager";
import { calculateNextPosition } from "./positionCalculator";

export const deployRobot = (
  grid: GridData,
  position: string,
  movements: string,
): string => {
  const { isOutOfBounds, scent } = grid;
  const [x, y, direction] = position.split(" ");
  let [currentX, currentY] = [parseInt(x, 10), parseInt(y, 10)];
  let currentDirection = DIRECTIONS.indexOf(direction as Direction);

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
