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
  return <circle id={id + ""} cx={x} cy={y} r={start || end ? 10 : 6} fill={end ? "#818cf8" : start || path ? "#34d399" : "#DADFE9"} /* className={!path ? "opacity-0" : ""} */ onClick={handleClick} />
}

export default Node
