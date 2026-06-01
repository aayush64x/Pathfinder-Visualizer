import type { Node } from "../Types/Cell";
import { ROWS, COLUMNS } from "../Types/Constants";

export function getNeighbors(grid: Node[][], node : Node ) : Node[]{
  let arr : Node [] = []
  const row = node.row; 
  const col = node. column; 
  
  const directions = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];

  for (const [r, c] of directions) {
    if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS) {
      if (grid[r][c].type !== "WALL") {
        arr.push(grid[r][c]);
      }
    }
  }
  
  return arr; 
}