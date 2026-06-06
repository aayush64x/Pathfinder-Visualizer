import { useRef, useState, useEffect } from "react";
import { CreateGrid, findNode, HasNode, PlaceNode, RemoveNode, ClearPath } from "./Utils/Helper";
import type { Algorithm } from "./Types/Cell";
import { bfs } from "./Algortithm/BFS";
import { djikstra } from "./Algortithm/Djikstra";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";
import { animate } from "./Utils/Animator";
import { astar } from "./Algortithm/AStar";

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
    if (isRunning) return;
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
    if (!isMouseDown.current || isRunning) return;
    if (grid[row][col].type === "EMPTY") {
      setGrid(PlaceNode(grid, row, col, "WALL"));
    }
  };

  const handleVisualize = async () => {
    const clearedGrid = ClearPath(grid);
    setGrid(clearedGrid);

    const startNode = findNode(clearedGrid, "START");
    const endNode = findNode(clearedGrid, "END");

    if (!startNode || !endNode) {
      alert("Please place start and end nodes first");
      return;
    }

    setIsRunning(true);

    if (algorithm === "BFS") {
      const [visited, path] = bfs(clearedGrid, startNode, endNode);
      await animate(visited, path, setGrid, 10);
    } else if (algorithm === "DIJKSTRA") {
      const [visited, path] = djikstra(clearedGrid, startNode, endNode);
      await animate(visited, path, setGrid, 10);
    }
    else if (algorithm === "A-STAR") {
      const [visited, path] = astar(clearedGrid, startNode, endNode);
      await animate(visited, path, setGrid, 10);
    }

    setIsRunning(false);
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