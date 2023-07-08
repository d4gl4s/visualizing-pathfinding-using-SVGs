import { graph } from "./graph.ts"

const shortestDistanceNode = (distances, visited) => {
  let shortest = null

  for (let node in distances) {
    let currentIsShortest = shortest === null || distances[node] < distances[shortest]
    if (currentIsShortest && !visited.includes(node)) shortest = node
  }
  return shortest
}

export const dijkstra = (startNode, endNode) => {
  let distances = {}
  distances[endNode] = Infinity
  distances = Object.assign(distances, graph[startNode])

  // track paths
  let parents = { endNode: null }
  for (let child in graph[startNode]) {
    parents[child] = startNode
  }

  let visited = [] // track nodes that have already been visited
  let node = shortestDistanceNode(distances, visited) // find the nearest node

  while (node) {
    let distance = distances[node] //from start node
    let children = graph[node]

    for (let child in children) {
      if (String(child) === String(startNode)) continue
      else {
        let newdistance = distance + children[child]

        // if there's no recorded distance from the start node to the child node in the distances object
        // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
        if (!distances[child] || distances[child] > newdistance) {
          distances[child] = newdistance // save the distance to the object
          parents[child] = node // record the path
        }
      }
    }
    visited.push(node)
    node = shortestDistanceNode(distances, visited)
  }

  let shortestPath = [endNode] // using the stored paths from start node to end node record the shortest path
  let parent = parents[endNode]
  while (parent) {
    shortestPath.push(parent)
    parent = parents[parent]
  }
  shortestPath.reverse()

  return {
    distance: distances[endNode],
    path: shortestPath,
  }
}
