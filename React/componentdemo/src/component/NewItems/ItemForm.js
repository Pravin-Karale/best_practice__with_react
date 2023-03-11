import { useState } from "react";
import "./ItemForm.css";
const ItemForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState("");
    const [enteredCost,setEnteredCost]=useState("");
    const [enteredDate,setEnteredDate]=useState("");

    // const  [userInput,setUserInput]=useState(
    //     {
    //         enteredTitle:"",
    //         enteredCost:"",
    //         enteredDate:"",
    //     }
    // )

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value}
        // })
    };
    const costChangeHandler=(event)=>{
        setEnteredCost(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    // const btnClick=()=>{
    //     console.log(enteredTitle,enteredDate,enteredCost);
    // }
    const btnSubmitHandler=(event)=>{
        event.preventDefault();
        const itemData={
            item_Title:enteredTitle,
            item_Cost:enteredCost,
            item_Pur_Date:new Date(enteredDate)
        };
        // console.log(itemData);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredCost("");
        props.onSaveItem(itemData);
    };
    const cancelHandler=()=>
    {
        props.onCancel();
    }
    return(
    
        <form onSubmit={btnSubmitHandler}>
            <div className="new-item__controls">
                <div className="new-item__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-item__control">
                    <label>Cost</label>
                    <input type="number" min="10" step="1" onChange={costChangeHandler} value={enteredCost} />
                </div>
                <div className="new-item__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-item__actions">
                {/* <button type="button" onClick={btnClick}>Add Item</button> */}
                <button type="submit">Add item</button>
                <button type="button" onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    )
}
export default ItemForm;