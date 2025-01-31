export const DIRECTIONS = ["N", "E", "S", "W"] as const;
export type Direction = (typeof DIRECTIONS)[number];
export const MAX_COORDINATE = 50;
export const MAX_COMMANDS = 100;
