export type GridData = {
  gridX: number;
  gridY: number;
  scent: Set<string>;
  isOutOfBounds: (x: number, y: number) => boolean;
};

export const createGrid = (grid: string): GridData => {
  const gridX = parseInt(grid.split(" ")[0], 10);
  const gridY = parseInt(grid.split(" ")[1], 10);
  const scent = new Set<string>();

  const isOutOfBounds = (x: number, y: number): boolean =>
    x < 0 || y < 0 || x > gridX || y > gridY;

  return { gridX, gridY, scent, isOutOfBounds };
};
