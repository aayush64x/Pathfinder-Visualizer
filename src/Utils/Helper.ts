
import type { Node, NodeType } from "../Types/Cell";
import { ROWS, COLUMNS } from "../Types/Constants";

export function CreateGrid(): Node[][]{
  const grid: Node[][] = []

  for(let row = 0; row < ROWS; row++){
    const currentRow: Node[] = []; 
    for(let column = 0; column < COLUMNS; column++){
      currentRow.push({row,column, type:"EMPTY"})
    }
    grid.push(currentRow); 
  }

  return grid; 
}

export function PlaceNode(grid: Node[][], row: number, col: number, nodeType: NodeType): Node[][] {
  return grid.map((currentRow, rowIndex) =>
    currentRow.map((node, colIndex) => {
      if (rowIndex === row && colIndex === col) {
        return { ...node, type: nodeType }
      }
      return node
    })
  )
}

export function RemoveNode(grid : Node[][], row : number, col : number) : Node[][]{
  return grid.map((currentRow, rowIndex) =>
    currentRow.map((node, colIndex) => {
      if (rowIndex === row && colIndex === col) {
        return { ...node, type: "EMPTY"}
      }
      return node
    })
  )
}

export function HasNode(grid: Node[][], nodeType : NodeType) : boolean{
  for (let i = 0; i < grid.length; i ++){
    for ( let j = 0; j < grid[i].length; j++){
      if (grid[i][j].type === nodeType){
        return true;
      }
    }
  }
  return false; 
}

export function findNode(grid: Node[][], nodeType:NodeType){
  for(const row of grid){
    for(const node of row){
      if(node.type === nodeType){
        return node;
      }
    }
  }
  return null; 
}

export function ClearPath(grid : Node[][]) : Node[][]{
  return grid.map( row => 
    row.map(node => {
      if(node.type === "VISITED" || node.type === "PATH"){
        return {...node, type:"EMPTY"};
      }
      return node;
    })
  )
}