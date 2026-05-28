# 🧭 Pathfinding Visualizer

A interactive web-based pathfinding visualizer that demonstrates how algorithms like Dijkstra’s Algorithm, A* Search, and Breadth-First Search (BFS) explore a grid to find the shortest path between two points.

---

## 🚀 Features

- 🎯 Visualize pathfinding algorithms step-by-step
- 🧱 Interactive grid (add/remove walls)
- 🟢 Set start and end nodes
- ⚡ Multiple algorithms support:
  - Dijkstra’s Algorithm
  - A* Search
  - Breadth-First Search (BFS)
- 🧹 Clear grid / reset board
- 🎨 Real-time animations for visited nodes and shortest path
- 📱 Responsive UI

---

## 🧠 Algorithms Explained

### Dijkstra’s Algorithm
Guarantees the shortest path by exploring all nodes in order of distance from the start node.

### A* Search
Uses heuristics (Manhattan distance) to prioritize faster paths and improve performance.

### Breadth-First Search (BFS)
Explores all nodes level by level and guarantees shortest path in unweighted grids.

---

## 🛠️ Tech Stack

- React
- TypeScript
- CSS / Tailwind
- JavaScript algorithms

---

## 📦 Installation

```bash
git clone https://github.com/aayush64x/pathfinding-visualizer.git
cd pathfinding-visualizer
npm install
npm start
```

---

## 🧩 How It Works

- Grid is a 2D array of nodes
- Each node has:
  - position (row, col)
  - type (start, end, wall, empty)
  - visited state / distance
- Algorithms update node states step-by-step
- UI animates visited nodes + shortest path

---

## 💡 Future Improvements

- Weighted nodes
- Diagonal movement
- Maze generation
- Speed control slider
- Mobile support

---

## 🧑‍💻 Author

Aayush Nakarmi
Computer Science Student | Aspiring Software Engineer
