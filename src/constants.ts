export const MAX_COORDINATE = 50;
export const MAX_COMMANDS = 100;
export const DIRECTIONS = ["N", "E", "S", "W"] as const; // they must be defined in a clockwise direction.
export type Direction = (typeof DIRECTIONS)[number];
