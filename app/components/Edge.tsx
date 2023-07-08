interface Edge {
  d: string
  path: boolean
}
const Edge = ({ d, path }: Edge) => {
  return <path d={d} className={path ? "" : " opacity-0"} stroke={path ? "#6ee7b7" : "#E4E0FB"} strokeWidth="3" />
}

export default Edge
