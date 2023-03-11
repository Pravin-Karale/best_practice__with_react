import logo from './logo.svg';
import './App.css';
import ShoppingItem from './component/ShoppingItem';
import Items from './component/Items';
import NewItem from './component/NewItems/NewItem';
import { useState } from 'react';

  const items_initial=[
    {
      id:"i1",
      item_Title:"Laptop",
      item_Cost:90000,
      item_Pur_Date:new Date(2022,11,11)
    },
    {
      id:"i2",
      item_Title:"keybord",
      item_Cost:1000,
      item_Pur_Date:new Date(2023,11,11)
    },
    {
      id:"i3",
      item_Title:"printer",
      item_Cost:8000,
      item_Pur_Date:new Date(2022,11,11)
    },
    {
      id:"i4",
      item_Title:"projector",
      item_Cost:40000,
      item_Pur_Date:new Date(2021,11,11)
    }
  ]
  const App=() =>{
    const [items,setItems]=useState(items_initial);
  const saveItemListener=(item)=>
  {
   setItems((prevItems)=>
   {
    return[item,...prevItems];
   })
  }
  return (

    // <div className="App">
    //   <h1>This first react project.....</h1>
    //   <Items items={items}></Items>
    // </div>
    
    <div className="App">
      <h1>MY SHOP</h1>
      <div>
      <NewItem onSaveItemData={saveItemListener}></NewItem>
     
        <Items items={items}></Items>
       
      </div>
    </div>
    
  )
}

export default App;