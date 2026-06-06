export type NodeType = "WALL" | "START" | "END" | "VISITED" | "EMPTY" | "PATH"; 

export type Algorithm = "BFS" | "DIJKSTRA" | "A-STAR"; 

export interface Node{
    row : number; 
    column : number; 
    type : NodeType; 
}