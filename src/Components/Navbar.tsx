import type{ Algorithm } from "../Types/Cell";

type NavbarProps = {
  algorithm: Algorithm;
  isRunning: boolean;
  onAlgorithmChange: (a: Algorithm) => void;
  onVisualize: () => void;
  onClearBoard: () => void;
  onClearWalls: () => void;
}

function Navbar({ algorithm, isRunning, onAlgorithmChange, onVisualize, onClearBoard, onClearWalls }: NavbarProps) {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex items-center gap-8 shadow-lg">
      
      {/* Title */}
      <h1 className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
        Pathfinding Visualizer
      </h1>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-600" />

      {/* Algorithm Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-400 whitespace-nowrap">Algorithm</label>
        <select
          value={algorithm}
          onChange={e => onAlgorithmChange(e.target.value as Algorithm)}
          disabled={isRunning}
          className="bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg border border-gray-600 cursor-pointer disabled:opacity-50"
        >
          <option value="bfs">Breadth First Search</option>
          <option value="dijkstra">Dijkstra</option>
          <option value="astar">A* Search</option>
        </select>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-600" />

      {/* Visualize Button */}
      <button
        onClick={onVisualize}
        disabled={isRunning}
        className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-5 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap"
      >
        {isRunning ? "Running..." : "Visualize!"}
      </button>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-600" />

      {/* Clear Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onClearBoard}
          disabled={isRunning}
          className="text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Clear Board
        </button>
        <button
          onClick={onClearWalls}
          disabled={isRunning}
          className="text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Clear Walls
        </button>
      </div>

    </nav>
  )
}

export default Navbar;