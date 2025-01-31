import { GridSchema } from "./schemas";

export interface GridData {
  gridX: number;
  gridY: number;
  scent: Set<string>;
  isOutOfBounds: (x: number, y: number) => boolean;
}

export const createGrid = (grid: string): GridData => {
  const gridValidation = GridSchema.safeParse(grid);
  if (!gridValidation.success) {
    throw new Error(gridValidation.error.errors[0].message);
  }
  const { x: gridX, y: gridY } = gridValidation.data;

  const scent = new Set<string>();

  const isOutOfBounds = (x: number, y: number): boolean =>
    x < 0 || y < 0 || x > gridX || y > gridY;

  return { gridX, gridY, scent, isOutOfBounds };
};
