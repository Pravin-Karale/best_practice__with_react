import logo from './logo.svg';
import './App.css';
import AddUser from './components/User/AddUser';
import { useState } from 'react';
import UsersList from './components/User/UsersList';

function App() {

  const [userList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge)=>
  {
    setUserList((prevUsers)=>
    {
      return[{
        userName:uName,
        userAge:uAge,
        id:Math.random().toString()
      },...prevUsers]
    })
   // console.log(userList);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={userList}></UsersList>
    </div>
  );
}

export default App;
