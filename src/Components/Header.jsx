

const Header = ({title}) => {
  return (
    <>
    <div className=" font-bold text-5xl bg-blue-700 text-white">{title}</div>
    </>
  )
}
Header.defaultProps={
  title:"To Do List"
}
export default Header