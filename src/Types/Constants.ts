export const CELL_SIZE = 24
export const COLUMNS = Math.floor(window.innerWidth / CELL_SIZE)
export const ROWS = Math.floor((window.innerHeight - 60) / CELL_SIZE)
export const START_ROW = Math.floor(ROWS / 2)
export const START_COL = Math.floor(COLUMNS / 4)
export const END_ROW = Math.floor(ROWS / 2)
export const END_COL = Math.floor((COLUMNS / 4) * 3)