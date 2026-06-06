import type { Algorithm } from "../Types/Cell";

type NavbarProps = {
  algorithm: Algorithm;
  isRunning: boolean;
  onAlgorithmChange: (a: Algorithm) => void;
  onVisualize: () => void;
  onClearBoard: () => void;
  onClearWalls: () => void;
};

function Navbar({
  algorithm,
  isRunning,
  onAlgorithmChange,
  onVisualize,
  onClearBoard,
  onClearWalls,
}: NavbarProps) {
  return (
    <nav className="w-full bg-gray-900 text-white px-4 py-3 flex flex-wrap items-center gap-3 shadow-lg">
      {/* Title */}
      <h1 className="text-base md:text-xl font-bold tracking-tight text-white whitespace-nowrap">
        Pathfinding Visualizer
      </h1>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-600 hidden md:block" />

      {/* Algorithm Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
          Algorithm
        </label>
        <select
          value={algorithm}
          onChange={(e) => onAlgorithmChange(e.target.value as Algorithm)}
          disabled={isRunning}
          className="bg-gray-700 text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-gray-600 cursor-pointer disabled:opacity-50"
        >
          <option value="BFS">BFS</option>
          <option value="DIJKSTRA">Dijkstra</option>
          <option value="A-STAR">A*</option>
        </select>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-600 hidden md:block" />

      {/* Visualize Button */}
      <button
        onClick={onVisualize}
        disabled={isRunning}
        className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-3 md:px-5 py-1.5 rounded-lg text-xs md:text-sm transition-colors whitespace-nowrap"
      >
        {isRunning ? "Running..." : "Visualize!"}
      </button>

      {/* Divider */}
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

      {/* GitHub Link */}
      <a
        href="https://github.com/aayush64x/Pathfinder-Visualizer"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span className="text-xs md:text-sm font-medium">GitHub</span>
      </a>
    </nav>
  );
}

export default Navbar;
