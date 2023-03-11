import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser=(props)=>{
    const nameInputRef=useRef("");
const ageInputRef=useRef("");
    // const addUserHandler=(event)=>{
    //     event.preventDefault();
    // };
    // const[enteredUsername,setEnteredname]=useState("")
    // const[enteredAge,setEnteredAge]=useState("");
    const[error,setError]=useState();

    // const userNameChangeHandler=(event)=>
    // {
    //     setEnteredname(event.target.value);
    // }
    // const ageChangeHandler=(event)=>{
    //     setEnteredAge(event.target.value);
    // }
    const addUserHandler =(event)=>{
        event.preventDefault();
        //console.log(enteredUsername,enteredAge);

        let enteredUsername=nameInputRef.current.value;
        let enteredAge=ageInputRef.current.value;
        if(enteredUsername.trim().length===0 ||
            enteredAge.trim().length===0){
                setError(
                    {
                        title:"Field is Required",
                        message:"please enter non-empty values"
                    }
                )
            }
            if(enteredAge<0){
                setError(
                    {
                        title:"Non-negative Age",
                        message:"please enter non-negative age"
                    }
                )
                return;
            }
        props.onAddUser(enteredUsername,enteredAge);
        nameInputRef.current.value="";
        ageInputRef.current.value="";
        // setEnteredAge("");
        // setEnteredname("");
    };
    const confirmHandler=()=>
    {
        setError(null);
    }

    return(
        <div>
            {error && (<ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={confirmHandler}></ErrorModal>)}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
                    // onChange={userNameChangeHandler} 
                    // value={enteredUsername}
                    ref={nameInputRef}
                    ></input>
                    

                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number"
                    // onChange={ageChangeHandler}
                    // value={enteredAge}
                    ref={ageInputRef}
                    ></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );
}

export default AddUser;