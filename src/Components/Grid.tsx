import Cell from './Cell'
import type { Node } from '../Types/Cell'

type GridProps = {
  grid: Node[][],
  onCellClick: (row: number, col: number) => void,
  onMouseDown: (row: number, col: number) => void,
  onMouseUp: () => void; 
  onMouseEnter: (row: number, col: number) => void;
}

function Grid({ grid, onCellClick, onMouseDown, onMouseEnter, onMouseUp }: GridProps) {
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
              onCellClick={() => {
                console.log('node.row:', node.row, 'node.column:', node.column)
                onCellClick(node.row, node.column)
              }}
              onMouseDown={() => {
                onMouseDown(node.row, node.column);
              }}
              onMouseEnter={() => {
                onMouseEnter(node.row, node.column);
              }}
              onMouseUp={() => {
                onMouseUp();
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid;