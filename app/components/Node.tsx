interface Node {
  id: number
  x: number
  y: number
  start: boolean
  end: boolean
  path: boolean
  handleClick: any
}

const Node = ({ id, x, y, start, end, path, handleClick }: Node) => {
  return <circle className={path ? "" : "opacity-0"} id={id + ""} cx={x} cy={y} r={start || end ? 8 : 4} fill={end ? "#818cf8" : start || path ? "#34d399" : "#DADFE9"} onClick={handleClick} />
}

export default Node
