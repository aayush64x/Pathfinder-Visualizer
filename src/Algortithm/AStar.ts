import type { Node } from "../Types/Cell";
import { ROWS, COLUMNS } from "../Types/Constants";

function getNeighbors(grid: Node[][], node: Node): Node[] {
  const arr: Node[] = [];
  const row = node.row;
  const col = node.column;

  const directions = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
  ];

  for (const [r, c] of directions) {
    if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS) {
      if (grid[r][c].type !== "WALL") {
        arr.push(grid[r][c]);
      }
    }
  }

  return arr;
}

function heuristic(node: Node, endNode: Node): number {
  return Math.abs(node.row - endNode.row) + Math.abs(node.column - endNode.column);
}

function findPath(map: Map<Node, Node>, startNode: Node, endNode: Node): Node[] {
  const path: Node[] = [];
  path.push(endNode);
  let current: Node = endNode;

  while (current !== startNode) {
    const parent = map.get(current);
    if (!parent) break;
    path.push(parent);
    current = parent;
  }

  return path.reverse();
}

export function astar(grid: Node[][], startNode: Node, endNode: Node): [Node[], Node[]] {
  const visitedSet = new Set<Node>();
  const visited: Node[] = [];
  const parent = new Map<Node, Node>();
  const gScore = new Map<Node, number>();
  const fScore = new Map<Node, number>();

  for (const row of grid) {
    for (const node of row) {
      gScore.set(node, Infinity);
      fScore.set(node, Infinity);
    }
  }

  gScore.set(startNode, 0);
  fScore.set(startNode, heuristic(startNode, endNode));

  const queue: Node[] = [startNode];

  while (queue.length > 0) {
    queue.sort((a, b) => fScore.get(a)! - fScore.get(b)!);

    const current = queue.shift();
    if (!current) break;

    if (visitedSet.has(current)) continue;
    visitedSet.add(current);
    visited.push(current);

    if (current === endNode) break;

    for (const n of getNeighbors(grid, current)) {
      const newG = gScore.get(current)! + 1;
      if (newG < gScore.get(n)!) {
        gScore.set(n, newG);
        fScore.set(n, newG + heuristic(n, endNode));
        parent.set(n, current);
        queue.push(n);
      }
    }
  }

  const path = findPath(parent, startNode, endNode);
  return [visited, path];
}