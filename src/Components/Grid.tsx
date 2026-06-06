import Cell from './Cell'
import type { Node } from '../Types/Cell'

type GridProps = {
  grid: Node[][],
  onMouseDown: (row: number, col: number) => void,
  onMouseEnter: (row: number, col: number) => void;
}

function Grid({ grid, onMouseDown, onMouseEnter }: GridProps) {
  return (
    <div
      className="border border-gray-300 shadow-md overflow-hidden"
      style={{ lineHeight: 0 }}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map(node => (
            <Cell
              key={`${node.row}-${node.column}`}
              type={node.type}
              onMouseDown={() => onMouseDown(node.row, node.column)}
              onMouseEnter={() => onMouseEnter(node.row, node.column)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid;