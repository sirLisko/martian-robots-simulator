const GRID = "5 3";
const GRID_X = parseInt(GRID.split(" ")[0], 10);
const GRID_Y = parseInt(GRID.split(" ")[1], 10);

const DIRECTIONS = ["N", "E", "S", "W"] as const;
type Direction = (typeof DIRECTIONS)[number];

const scent = new Set<string>();

const calculateNextPosition = (
  x: number,
  y: number,
  directionIndex: number,
): [number, number] => {
  switch (DIRECTIONS[directionIndex]) {
    case "N":
      return [x, y + 1];
    case "E":
      return [x + 1, y];
    case "S":
      return [x, y - 1];
    case "W":
      return [x - 1, y];
    default: {
      const neverHappens: never = DIRECTIONS[directionIndex];
      return neverHappens;
    }
  }
};

const isOutOfBounds = (x: number, y: number): boolean =>
  x < 0 || y < 0 || x > GRID_X || y > GRID_Y;

export const deployRobot = (position: string, movements: string): string => {
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
