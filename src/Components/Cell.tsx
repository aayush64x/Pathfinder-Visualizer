import type { NodeType } from '../Types/Cell';
import { CELL_SIZE } from '../Types/Constants';

export const ColorMap: Record<NodeType, string> = {
  START: "bg-cyan-500",
  END: "bg-red-400",
  PATH: "bg-yellow-400",
  EMPTY: "bg-white",
  WALL: "bg-slate-700",
  VISITED: "bg-blue-300"
};

type Props = {
  type: NodeType,
  onMouseDown: () => void,
  onMouseEnter: () => void
};

function Cell({ type, onMouseDown, onMouseEnter }: Props) {
  const animationClass =
    type === 'VISITED' ? 'animate-visited' :
    type === 'PATH' ? 'animate-path' : ''

  return (
    <div
      className={`${ColorMap[type]} ${animationClass} border border-gray-200 cursor-pointer aspect-square`}
      style={{ width: CELL_SIZE }}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    />
  );
}

export default Cell;