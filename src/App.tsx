import { useRef, useState, useEffect} from "react";
import { CreateGrid, HasNode, PlaceNode, RemoveNode } from "./Utils/Helper";
import type { Algorithm} from "./Types/Cell";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";

function App(){
  const [grid, setGrid] = useState(CreateGrid);
  const [algorithm, setAlgorithm] = useState<Algorithm>('BFS');
  const [isRunning, setIsRunning] = useState(false);
  const isMouseDown = useRef(false); 

  const handleVisualize = () => {
    console.log('visualize clicked - algorithm coming soon');
  }
  
  const handleClearBoard = () => {
    setGrid(CreateGrid());
  }

  const handleClearWalls = () => {
    setGrid(row =>
      row.map(col =>
        col.map(node =>
          node.type === 'WALL' ? { ...node, type: 'EMPTY' as const } : node
        )
      )
    );
  }

  const handleCellClick = ((row : number, col : number) => {
    const node = grid[row][col];
    console.log('clicked', row, col)

    if (node.type === "START" || node.type === "WALL" || node.type === "END"){
      setGrid(RemoveNode(grid, row, col));
    }
    if (node.type === "EMPTY"){
      if(!HasNode(grid, "START")){
        setGrid(PlaceNode(grid, row, col, "START")); 
      }
      else if(!HasNode(grid, "END")){
        setGrid(PlaceNode(grid, row, col, "END")); 
      }
      else{
        setGrid(PlaceNode(grid, row, col, "WALL"));
      }
    }
  });

  const handleMouseDown = (row : number, col : number) => {
    isMouseDown.current = true;
    const node = grid[row][col];
    if(grid[row][col].type === "EMPTY"){
      if(!HasNode(grid, "START")){
        setGrid(PlaceNode(grid, row, col, "START")); 
      }
      else if(!HasNode(grid, "END")){
        setGrid(PlaceNode(grid, row, col, "END")); 
      }
      else{
        setGrid(PlaceNode(grid, row, col, "WALL"));
      }
    }
    if (node.type === "START" || node.type === "WALL" || node.type === "END"){
      setGrid(RemoveNode(grid, row, col));
    }
  }; 

  const handleMouseEnter = (row: number, col: number) => {
    if(!isMouseDown.current) return ; 
    if (grid[row][col].type === "EMPTY"){
      setGrid(PlaceNode(grid, row, col, "WALL"));
    }
  }


  const handleMouseUp = () => {
    isMouseDown.current = false; 
  }; 

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])

  return(
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar
        algorithm={algorithm}
        isRunning={isRunning}
        onAlgorithmChange={setAlgorithm}
        onVisualize={handleVisualize}
        onClearBoard={handleClearBoard}
        onClearWalls={handleClearWalls}
      />
      <div className="flex flex-col items-center p-6">
        <Grid grid={grid} onCellClick={handleCellClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseEnter={handleMouseEnter}/>
      </div>
    </div>
  );  
}

export default App;