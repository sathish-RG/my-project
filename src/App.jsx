
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useState } from "react";
import SearchItem from "./Components/SearchItem";


function App(){
  const [items, setItems]=useState(JSON.parse(localStorage.getItem("todo_list")));
  

    const [newItem, setNewItem]=useState('')

    const [search, setSearch]=useState("")

    const addItem=(item)=>{
      const id=items.length ? items[items.length-1].id +1 : 1;
      const addNewItem={id,checked:false,item}
      const listItems=[...items, addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

   
  
  const handleCheck= (id)=>{
   const listItems=items.map((item)=>item.id===id?{...item, checked:!item.checked}:item)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
  const handleDelete=(id)=>{
   const listItems=items.filter((item)=>item.id!==id)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem)return;
  console.log(newItem)
  addItem(newItem)
  setNewItem("")
 }

  return(
    <div className=" text-center flex flex-col">
     <Header title ="To Do List"/>
     <AddItem
       newItem={newItem} 
        setNewItem={setNewItem}
       handleSubmit={handleSubmit}
     />
      <SearchItem
      search={search}
      setSearch={setSearch}

      />
     <Content
      items={items.filter(item=> ((item.item).toLowerCase()).includes(search))}
  
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     />
     <Footer
      length={items.length}
     />
    </div>
  )
}
export default App;