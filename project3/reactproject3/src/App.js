import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedInfo=localStorage.getItem("loggedIn");
  useEffect(()=>
  {
  if(storedInfo==="1")
  {
    setIsLoggedIn(true);
  }
  },[])
  const loginHandler=(email , password)=>{

   setIsLoggedIn(true); 
  };
  const logoutHandler=()=>{
    setIsLoggedIn(false);
    localStorage.setItem("loggedIn","0");
  };
  return(
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} 
      onLogout={logoutHandler}></MainHeader>
     
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
        {isLoggedIn && <Home onLogout={logoutHandler}> </Home>}
      </main>
    </React.Fragment>
  ); 
}
export default App;
