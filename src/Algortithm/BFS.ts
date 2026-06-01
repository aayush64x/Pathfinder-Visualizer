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

export function bfs(grid: Node[][], startNode : Node, endNode : Node) : [Node[], Node[]]{
  const visited : Node [] = []
  let path : Node [] = []
  const parent = new Map(); 
  
  const queue : Node[] = []
  queue.push(startNode); 

  while (queue.length > 0){
    let current = queue.shift();
    if (!current) break
    let neighbors  = getNeighbors(grid, current);

    if (current.type === "END") {
      break
    }

    for(const n of neighbors){
      const hasNode = visited.some(newNode => newNode.row === n.row && newNode.column === n.column)
      if(!hasNode){
        queue.push(n);
        visited.push(n); 
        parent.set(n, current);
      }
    }
  }

  path = findPath(parent, startNode, endNode);
  return [visited, path] 
}

function findPath( map : Map <Node, Node>, startNode : Node, endNode : Node) : Node[] {
  const path : Node[] = []
  let pathFound : boolean = false; 
  path.push(endNode);

  let current : Node = endNode; 
  
  while(!pathFound){
    let parent = map.get(current);
    if(!parent) break;

    path.push(parent);
    if ( parent === startNode){
      pathFound = true; 
    }
    current = parent; 
    
  }
  return path.reverse(); 
}