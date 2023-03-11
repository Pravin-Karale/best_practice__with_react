import "./NewItem.css";
import ItemForm from "./ItemForm";
import { useState } from "react";

const NewItem=(props)=>{
    const [isEditing,setIsEditing]=useState(false);

        const onSaveItemListener=(item)=>
        {
            console.log("this is new item");
            const itemData={...item,"id":Math.random()};
        //  console.log(itemData);
        props.onSaveItemData(itemData);
        }
        const startEditingHandler=()=>
        {
            setIsEditing(true);
        }
        const cancelHandler=()=>{
            setIsEditing(false);
        }
    return(
        <div className="new-item">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Item</button>
            )}
            {isEditing && ( <ItemForm 
            onSaveItem={onSaveItemListener}
            onCancel={cancelHandler}> </ItemForm> )}
        </div>
    )
}
export default NewItem;