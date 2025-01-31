import { DIRECTIONS } from "./constants";

export const calculateNextPosition = (
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
      throw new Error(`Invalid direction: ${directionIndex} = ${neverHappens}`);
    }
  }
};
