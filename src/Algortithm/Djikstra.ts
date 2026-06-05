import type { Node } from '../Types/Cell';
import { COLUMNS, ROWS } from '../Types/Constants';



export function getNeighbors(grid: Node[][], startNode : Node): Node[]{
  const arr : Node[] = []; 
  const row : number = startNode.row;
  const col : number = startNode.column; 

  const directions = [
    [row - 1, col], 
    [row + 1, col], 
    [row, col - 1], 
    [row, col + 1 ]
  ]; 

  for (const [r,c] of directions){
    if(r>=0 && c>=0 && r < ROWS && c < COLUMNS && grid[r][c].type !== "WALL"){
      arr.push(grid[r][c]); 
    }
  }

  return arr; 
}

export function djikstra(grid: Node[][], startNode: Node, endNode: Node): [Node[], Node[]] {
  const visited: Node[] = [];
  const parent = new Map();
  const distances = new Map<Node, number>();
  const visitedSet = new Set<Node>();

  for (const row of grid) {
    for (const node of row) {
      distances.set(node, Infinity);
    }
  }

  distances.set(startNode, 0);
  const queue: Node[] = [];
  queue.push(startNode);

  while (queue.length > 0) {
    queue.sort((a, b) => distances.get(a)! - distances.get(b)!);
    const current = queue.shift();
    if (!current) break;

    if (visitedSet.has(current)) continue;
    visitedSet.add(current);

    if (current === endNode) break;

    visited.push(current);

    const neighbors = getNeighbors(grid, current);
    for (const n of neighbors) {
      const dis = distances.get(current)! + 1;
      if (dis < distances.get(n)!) {
        distances.set(n, dis);
        parent.set(n, current);
        queue.push(n);
      }
    }
  }

  const path = findPath(startNode, endNode, parent);
  return [visited, path];
}

function findPath( startNode : Node, endNode: Node, map: Map<Node , Node>) : Node[]{
  const arr : Node[] = [] 
  arr.push(endNode);
  let current : Node = endNode;
  while (!(current === startNode)){
    let parent = map.get(current);
    if (!parent) break;
    arr.push(parent);
    current = parent
  }
  return arr.reverse(); 
}

