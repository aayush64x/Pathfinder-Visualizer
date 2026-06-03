import type { Node } from "../Types/Cell";
import { PlaceNode } from "./Helper";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function animate(
  visited: Node[],
  path: Node[],
  setGrid: Function,
  speed: number
): Promise<void> {
  // loop through visited
  // for each node wait speed ms then update to VISITED
  for(const node of visited){
    if(node.type === "EMPTY"){
      setGrid((prev : Node[][]) => PlaceNode(prev,node.row, node.column, "VISITED"));
      await sleep(speed); 
    }
  }
  
  for (const node of path){
    if(node.type === "EMPTY"){
      setGrid((prev : Node[][]) => PlaceNode(prev, node.row, node.column, "PATH"));
      await sleep(100);
    } 
  }
  // loop through path
  // for each node wait speed ms then update to PATH
}