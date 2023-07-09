interface Extra {
  id: number
  d: string
  d2: string
  d3: string
  start: boolean
  end: boolean
  handleClick: any
}
const Extra = ({ id, d, d2, d3, start, end, handleClick }: Extra) => {
  return (
    <>
      <path className="cursor-pointer" id={id + ""} d={d} onClick={handleClick} fill={end ? "#ADBFFD" : start ? "#A7F3D0" : "#EBE9F7"} />
      <path className="cursor-pointer" id={id + ""} onClick={handleClick} d={d2} fill={end ? "#ADBFFD" : start ? "#A7F3D0" : "#EBE9F7"} />
      <path className="cursor-pointer" id={id + ""} onClick={handleClick} d={d3} stroke={end ? "#3F7DF4" : start ? "#1AC989" : "#C4C6DF"} stroke-width="2" />
    </>
  )
}

export default Extra
