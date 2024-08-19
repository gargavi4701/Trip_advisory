import { useState } from "react";
export default function Form({onAddItem}){
    const [description,setDescription]=useState("");
    const [quantity,setQuantity]=useState(1);
  
    function handleSubmit(e){
     e.preventDefault();
     if(!description) return;
     onAddItem({description,quantity,packed:false,id:Date.now()})
     setDescription("")
     setQuantity(1)
    }
  return(
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What Do you required for your trip😍</h3>
      <select value={quantity} onChange={(e)=>setQuantity(+e.target.value)}>{Array.from({length:20},(_,i)=>i+1).map(val=>{
        return <option key={val} value={val}>{val}</option>
      })} 
      </select>
      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Item...'/>
      <button>Add</button>
    </form>
  )
   }