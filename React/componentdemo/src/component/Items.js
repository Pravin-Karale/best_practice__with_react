import DateFilter from "./DateFilter";
import Card from "./UI/Card";
import "./Items.css";
import ShoppingItem from "./ShoppingItem";
import { useState } from "react";

const Items=(props)=>
{
    const items=props.items;

    const [filteredYear,setFilteredYear]=useState("2021");
    const filterChangeHandler=(selectedYear)=>
    {
       setFilteredYear(selectedYear);
    }
    const filteredItems=items.filter((item)=>
    {
      //return item.item_pur_Date.getFullYear().toStrong()===filteredYear;
     return item.item_Pur_Date.getFullYear().toString()===filteredYear;
    });
    //console.log("filtered Items");
    console.log(filteredItems);
   let itemContent=<p className="no_items">no matching items</p>;
   if(filteredItems.length>0){
    itemContent=filteredItems.map((item)=>{
      return (<ShoppingItem
        key={item.id}
        itemTitle={item.item_Title}
        itemCost={item.item_Cost}
        itemPurDate={item.item_Pur_Date}>
      </ShoppingItem>)
    });
    // console.log('itemContent');
    console.log(itemContent);
   }
    return(

      <Card className="items">
       
        <DateFilter 
        
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}>
        </DateFilter>
        <div>
        {itemContent}
        </div>
        
        {/* {filteredItems.length==0 && (<p className="no_items">no matching items</p>)} */}

      
      


      {/* //<div className="items">
      // <Card></Card> */}
            {/* <ShoppingItem
        itemTitle={items[0].item_Title}
        itemCost={items[0].item_Cost}
        itemPurDate={items[0].item_Pur_Date}>
      </ShoppingItem>
      <ShoppingItem
        itemTitle={items[1].item_Title}
        itemCost={items[1].item_Cost}
        itemPurDate={items[1].item_Pur_Date}>
      </ShoppingItem>
      <ShoppingItem
        itemTitle={items[2].item_Title}
        itemCost={items[2].item_Cost}
        itemPurDate={items[2].item_Pur_Date}>
      </ShoppingItem>
      <ShoppingItem
        itemTitle={items[3].item_Title}
        itemCost={items[3].item_Cost}
        itemPurDate={items[3].item_Pur_Date}>
      </ShoppingItem>
        </Card>
        //<div> */}
        </Card>
    )
}
export default Items;