import { z } from "zod";
import {
  Direction,
  DIRECTIONS,
  MAX_COORDINATE,
  MAX_COMMANDS,
} from "./constants";

export const GridSchema = z
  .string()
  .refine((value) => {
    const [x, y] = value.split(" ").map(Number);
    return x <= MAX_COORDINATE && y <= MAX_COORDINATE;
  }, `Grid must be in the format "<number> <number>" and must be less than or equal to ${MAX_COORDINATE}`)
  .transform((value) => {
    const [x, y] = value.split(" ").map(Number);
    return {
      x: Number(x),
      y: Number(y),
    };
  });

export const PositionSchema = z
  .string()
  .refine((value) => {
    const [x, y, direction] = value.split(" ");
    return (
      !isNaN(Number(x)) &&
      !isNaN(Number(y)) &&
      Number(x) <= MAX_COORDINATE &&
      Number(y) <= MAX_COORDINATE &&
      DIRECTIONS.includes(direction as Direction)
    );
  }, `Position must be in the format "<number> <number> <direction>('N', 'E', 'S', 'W')" and coordinates must be <= ${MAX_COORDINATE}`)
  .transform((value) => {
    const [x, y, direction] = value.split(" ");
    return {
      x: Number(x),
      y: Number(y),
      direction: direction as Direction,
    };
  });

export const MovementsSchema = z.string().refine((value) => {
  return value.length < MAX_COMMANDS && /^[RLF]+$/i.test(value);
}, `Movements must be less than ${MAX_COMMANDS} characters and only contain 'R', 'L', or 'F'`);
