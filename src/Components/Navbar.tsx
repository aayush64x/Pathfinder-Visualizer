import type { Algorithm } from "../Types/Cell";

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
    <nav className="w-full bg-gray-900 text-white px-4 py-3 flex flex-wrap items-center gap-3 shadow-lg">
      
      {/* Title */}
      <h1 className="text-base md:text-xl font-bold tracking-tight text-white whitespace-nowrap">
        Pathfinding Visualizer
      </h1>

      {/* Divider - hidden on mobile */}
      <div className="h-6 w-px bg-gray-600 hidden md:block" />

      {/* Algorithm Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
          Algorithm
        </label>
        <select
          value={algorithm}
          onChange={e => onAlgorithmChange(e.target.value as Algorithm)}
          disabled={isRunning}
          className="bg-gray-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-gray-600 cursor-pointer disabled:opacity-50"
        >
          <option value="BFS">BFS</option>
          <option value="DIJKSTRA">Dijkstra</option>
          <option value="A-STAR">A*</option>
        </select>
      </div>

      {/* Divider - hidden on mobile */}
      <div className="h-6 w-px bg-gray-600 hidden md:block" />

      {/* Visualize Button */}
      <button
        onClick={onVisualize}
        disabled={isRunning}
        className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-colors whitespace-nowrap"
      >
        {isRunning ? "Running..." : "Visualize!"}
      </button>

      {/* Divider - hidden on mobile */}
      <div className="h-6 w-px bg-gray-600 hidden md:block" />

      {/* Clear Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onClearBoard}
          disabled={isRunning}
          className="text-xs md:text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          Clear Board
        </button>
        <button
          onClick={onClearWalls}
          disabled={isRunning}
          className="text-xs md:text-sm text-gray-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          Clear Walls
        </button>
      </div>

    </nav>
  )
}

export default Navbar;