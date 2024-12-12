

const Footer = ({length}) => {
  
  return (
    <footer className=" bg-blue-700 absolute bottom-0 w-full text-white">{length} List {length===1?"item":"items"}</footer>
  )
}

export default Footer