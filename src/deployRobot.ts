const GRID = "5 3";

const DIRECTIONS = ["N", "E", "S", "W"] as const;
type Direction = (typeof DIRECTIONS)[number];

export const deployRobot = (position: string, movements: string): string => {
  const [x, y, direction] = position.split(" ");
  const [gridX, gridY] = GRID.split(" ").map(Number);
  let [currentX, currentY] = [Number(x), Number(y)];
  let currentDirection = DIRECTIONS.indexOf(direction as Direction);

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === "R") {
      currentDirection = (currentDirection + 1) % DIRECTIONS.length;
    } else if (movements[i] === "L") {
      currentDirection = (currentDirection + 3) % DIRECTIONS.length;
    } else if (movements[i] === "F") {
      if (currentDirection === 0) {
        currentY++;
      } else if (currentDirection === 1) {
        currentX++;
      } else if (currentDirection === 2) {
        currentY--;
      } else if (currentDirection === 3) {
        currentX--;
      }
    }
    if (
      currentX >= gridX ||
      currentY >= gridY ||
      currentX < 0 ||
      currentY < 0
    ) {
      return `${currentX} ${currentY} ${direction} LOST`;
    }
  }

  return `${currentX} ${currentY} ${DIRECTIONS[currentDirection]}`;
};
