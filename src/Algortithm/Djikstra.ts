import type { Node } from '../Types/Cell';



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
    if(grid[r][c].type !== "WALL" && r>=0 && c>=0){
      arr.push(grid[r][c]); 
    }
  }

  return arr; 
}

export function djikstra( grid: Node[][], startNode : Node, endNode : Node) : [Node [], Node[]]{
  const visited : Node [] = []; 
  const map = new Map();
  const distances = new Map <Node, number>;
  const path : Node [] = findPath(startNode, endNode, map); 

  for (const row of grid) {
  for (const node of row) {
    distances.set(node, Infinity)
  }
}
  
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

function calculateDistance(startNode : Node, destinationNode : Node) : number{
  let distance : number = 0; 
  return distance; 
}