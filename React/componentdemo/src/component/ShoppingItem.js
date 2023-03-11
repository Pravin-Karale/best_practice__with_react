import{useState}from "react";
import FormatDate from "./FormatDate";
import "./ShoppingItem.css";
import Card from "./UI/Card";
const ShoppingItem=(props)=>{
    // let itemTitle=props.itemTitle;
    const [itemTitle,setItemTitle]=useState(props.itemTitle)
    const itemCost=props.itemCost;
    const itemPurDate=props.itemPurDate;

    const changeTitleHandler=()=>{
        // itemTitle="New Title";
        // console.log(itemTitle);
        setItemTitle("new title");
    }
    return(
        // <Card></Card>
        <Card className="shopping-item">
           <div>
            <h2>{itemTitle}</h2>
           </div>
           <div className="shopping-item_cost">{itemCost}</div>
           {/* <div className="shopping-item_date">{itemPurDate.toString()}</div> */}
           <div className="shopping-item_date">
           
            <FormatDate itemPurDate={itemPurDate}></FormatDate>
           </div>  
           <div><button onClick={changeTitleHandler}>Change Title</button></div>                                                 
        </Card>
       
    );
}

export default ShoppingItem;