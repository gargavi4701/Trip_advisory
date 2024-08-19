// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import { useState } from 'react'
import '../App.css'
import Logo from './Logo.jsx';
import Form from './Form.jsx';
import Packinglist from './Packinglist.jsx';
import Stats  from './Stats.jsx';
// // const packingItem=[
// //  {
// //   id:1,
// //   description:"Passport",
// //   quantity:2,
// //   packed:false,
// //  },
// //  {
// //   id:2,
// //   description:"Socks",
// //   quantity:5,
// //   packed:false,
// //  },
// //  {
// //   id:3,
// //   description:"Shirts",
// //   quantity:4,
// //   packed:false,
// //  },
// //  {
// //   id:4,
// //   description:"Charger",
// //   quantity:4,
// //   packed:true,
// //  },
// //  {
// //   id:5,
// //   description:"WaterBottle",
// //   quantity:1,
// //   packed:false,
// //  },
// // ]
export default function App(){
  const [items,setItem]= useState([]);
  function handleaddItem(item){
   
    setItem((items)=>[...items,item])
  }
  function handledeleteItem(thing){
    setItem(items=>items.filter(item=>item.id!=thing));
  }
  function handleToggleItem(id){
 setItem(items=>items.map(item=>item.id==id?
  {...item,
    packed:!item.packed}:item))

  }
  function handleClearList(){
    if(items.length==0) return 
    else{  const confirm=window.confirm("Are you sure you want to clear the list?");
      if(confirm)
        setItem([]);
    }
    
  }
  return(<div className='app'>
    <Logo/>
    <Form onAddItem={handleaddItem}/>
    <Packinglist items={items} onDeleteItem={handledeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items}/>
    </div>
  )

}

