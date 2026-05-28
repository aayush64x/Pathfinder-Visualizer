import { useRef, useState, useEffect } from "react";
import { CreateGrid, HasNode, PlaceNode, RemoveNode } from "./Utils/Helper";
import type { Algorithm } from "./Types/Cell";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";

function App() {
  const [grid, setGrid] = useState(CreateGrid);
  const [algorithm, setAlgorithm] = useState<Algorithm>('BFS');
  const [isRunning, setIsRunning] = useState(false);
  const isMouseDown = useRef(false);

  useEffect(() => {
    const handleMouseUp = () => { isMouseDown.current = false; };
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = (row: number, col: number) => {
    isMouseDown.current = true;
    const node = grid[row][col];
    if (node.type === "START" || node.type === "END" || node.type === "WALL") {
      setGrid(RemoveNode(grid, row, col));
      return;
    }
    if (node.type === "EMPTY") {
      if (!HasNode(grid, "START")) {
        setGrid(PlaceNode(grid, row, col, "START"));
      } else if (!HasNode(grid, "END")) {
        setGrid(PlaceNode(grid, row, col, "END"));
      } else {
        setGrid(PlaceNode(grid, row, col, "WALL"));
      }
    }
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!isMouseDown.current) return;
    if (grid[row][col].type === "EMPTY") {
      setGrid(PlaceNode(grid, row, col, "WALL"));
    }
  };

  const handleVisualize = () => {
    console.log('algorithm coming soon');
  };

  const handleClearBoard = () => {
    setGrid(CreateGrid());
  };

  const handleClearWalls = () => {
    setGrid(prev =>
      prev.map(row =>
        row.map(node =>
          node.type === 'WALL' ? { ...node, type: 'EMPTY' as const } : node
        )
      )
    );
  };

  return (
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
        <Grid
          grid={grid}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
        />
      </div>
    </div>
  );
}

export default App;