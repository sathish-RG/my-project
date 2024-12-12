

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm font-bold mt-1 flex p-2 gap-2' onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor= "search" >Search</label>
    <input 
      className="border"
      type="text" 
      id='search'
      role='searchbox'
      placeholder='Search Items'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
    </form>
  )
}

export default SearchItem