interface Classroom {
  id: number
  d: string
  start: boolean
  end: boolean
  handleClick: any
}
const Classroom = ({ id, d, start, end, handleClick }: Classroom) => {
  return (
    <path
      className="cursor-pointer"
      id={id + ""}
      d={d}
      onClick={handleClick}
      fill={end ? "#ADBFFD" : start ? "#A7F3D0" : "#EBE9F7"}
      stroke={end ? "#3F7DF4" : start ? "#1AC989" : "#C4C6DF"}
      strokeWidth="2"
    />
  )
}

export default Classroom
