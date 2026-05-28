import Cell from './Cell'
import type { Node } from '../Types/Cell'

type GridProps = {
  grid: Node[][],
  onMouseDown: (row: number, col: number) => void,
  onMouseEnter: (row: number, col: number) => void;
}

function Grid({ grid, onMouseDown, onMouseEnter }: GridProps) {
  return (
    // The container stacks the rows vertically
    <div className="flex flex-col">
      {grid.map((row, rowIndex) => (
        // Each row aligns its cells horizontally
        <div key={rowIndex} className="flex">
          {row.map(node => (
            <Cell
              key={`${node.row}-${node.column}`}
              type={node.type}
              
              onMouseDown={() => {
                onMouseDown(node.row, node.column);
              }}
              onMouseEnter={() => {
                onMouseEnter(node.row, node.column);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid;