import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm flex justify-center gap-2 items-center mt-1 flex-wrap' onSubmit={(handleSubmit)}>
      <label htmlFor="addItem" className=' font-bold text-3xl'></label>
      <input 
       className=' rounded bg-white-400 border p-2 w-48 md:w-96'
       type="text"
       autoFocus
       id='addItem'
       placeholder='Add Item'
       required
       value={newItem}
       onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        className=' bg-blue-700 p-2 rounded'
        type='submir'
        aria-label='Add Item'
        >
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem