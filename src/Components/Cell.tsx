import type { NodeType } from '../Types/Cell';

export const ColorMap: Record<NodeType, string> = {
  START: "bg-cyan-500",
  END: "bg-red-400",
  PATH: "bg-green-600",
  EMPTY: "bg-white",
  WALL: "bg-slate-600",
  VISITED: "bg-blue-100"
};

type Props = {
  type: NodeType,
  onMouseDown: () => void, 
  onMouseEnter: () => void
};

function Cell({ type, onMouseDown, onMouseEnter}: Props, ) {
  return (
    // Clean, single border where the border color perfectly matches the background opacity
    <div className={`w-10 h-10 rounded border border-gray-500/40 ${ColorMap[type]}`} onMouseDown={() => onMouseDown()} onMouseEnter={() => onMouseEnter()} />
  );
}

export default Cell;