# Pathfinding Visualizer

This project is a React-based application designed to explore visualizing graph manipulation and pathfinding algorithms using SVGs. Unlike traditional React grid-based pathfinding visualizers, this application allows for flexible node placement and displays edges between nodes. 

You can check out the interactive project demo [here](https://indoor-pathfinding.vercel.app/), or read more about the project on the [project page](https://www.daglasaitsen.com/pathfinder).

## The Idea

The motivation behind this project was to develop a pathfinding program that offers a visual representation of the shortest path between two distinct rooms within a building. Instead of being limited to a grid layout, the application aims to provide a more realistic depiction of room layouts within a building. As an example, the first floor of the University of Tartu Delta Center was chosen to demonstrate this concept.

## How Does It Work?

- Each room depicted on the map represents a node in the graph.
- Undirected edges correspond to paths connecting adjacent rooms, with associated weights representing the distance between nodes.
- SVG paths for all nodes and edges are stored in an array, while edges and weights are stored in a JavaScript object.

### Pathfinding Algorithm

1. The user selects a starting point by clicking on a room on the map.
2. After selecting the starting point, a destination can be chosen.
3. The room numbers of the starting and ending points are stored in React state.
4. A function utilizing Dijkstra's algorithm calculates the shortest path between the selected points and returns an array of nodes on the path.
5. The returned array triggers a React re-render to reflect the changes.
6. When displaying the path, the application iterates through the array of edges. If both connected nodes of an edge are present in the returned node array, the SVG path associated with the edge is displayed; otherwise, the edge opacity is set to zero. The same principle applies to nodes—only if a node exists within the returned array is it rendered.

## Technologies Used

- React
- Typescript
- SVG manipulation

## Preview

<img src="https://github.com/d4gl4s/visualizing-react-pathfinding-using-SVGs/assets/91371101/275e4cd5-210f-4ac6-b32a-5cd3e47c7fa1" alt="Image Description" style="width:50%;">



## Links

You can check out the interactive project demo [here](https://indoor-pathfinding.vercel.app/), or read more about the project on the [project page](https://www.daglasaitsen.com/pathfinder).

## Acknowledgements

Special thanks to the University of Tartu for providing the inspiration and example floor plan for this project.
