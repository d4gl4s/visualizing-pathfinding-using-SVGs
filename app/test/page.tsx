"use client"

import { useState } from "react"
const edges = [
  [1, 2, "M189.5 2557L2208.5 777"],
  [1, 3, "M4096 3118.5L189.5 2533.5"],
  [2, 4, "M2208.5 765L4287.5 406.5"],
  [3, 5, "M6438 1768.5L4096 3142.5"],
  [4, 5, "M4323 383L6485.5 1745"],
  [5, 6, "M6450 1745L7465.5 203.5"],
]
const nodes = [
  [1, 194, 2536],
  [2, 2189, 776],
  [3, 4101, 3133],
  [4, 4295, 388],
  [5, 6442, 1735],
  [6, 7446, 194],
] //[id, x, y]
import Node from "@/app/components/Node"
import Edge from "../components/Edge"
import { dijkstra } from "../algorithms/dijkstra"

export default function Page() {
  const [mode, setMode] = useState<"start" | "end" | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [path, setPath] = useState<string[]>([])
  const [startNode, setStartNode] = useState(-1)
  const [endNode, setEndNode] = useState(-1)

  const handleModeChange = () => {
    if (mode == "start") setMode("end")
    else if (mode == null) setMode("start")
    else setMode(null)
  }

  const handleNodeClick = (e: any) => {
    const id = e.currentTarget.id
    if (mode == "start" && endNode != id) setStartNode(id)
    else if (mode == "end" && startNode != id) setEndNode(id)
    else if (mode === null && startNode != id) {
      setEndNode(id)
      const shortestPath = dijkstra(startNode, id)
      setDistance(shortestPath.distance)
      setPath(shortestPath.path)
    }
  }

  const handlePathfinding = () => {
    if (startNode == -1 || endNode == -1) return
    setMode(null)
    const shortestPath = dijkstra(startNode, endNode)
    setDistance(shortestPath.distance)
    setPath(shortestPath.path)
  }

  return (
    <main>
      <button onClick={handleModeChange}>Change Mode: {mode}</button>
      <button className="bg-emerald-400 text-white px-6 p-2 rounded font-semibold" onClick={handlePathfinding}>
        Find Path
      </button>
      {distance}
      {path}
      <svg className="w-[70%] mt-16 m-auto" viewBox="0 0 7640 3327" fill="none" xmlns="http://www.w3.org/2000/svg">
        {edges.map((edge: any[], i: number) => (
          <Edge key={i} d={edge[2]} path={path.includes(edge[0].toString()) && path.includes(edge[1].toString())} />
        ))}
        {nodes.map((node: number[], i: number) => (
          <Node key={i} id={node[0]} x={node[1]} y={node[2]} start={node[0] == startNode} end={node[0] == endNode} path={path.includes(node[0].toString())} handleClick={handleNodeClick} />
        ))}
      </svg>
    </main>
  )
}
