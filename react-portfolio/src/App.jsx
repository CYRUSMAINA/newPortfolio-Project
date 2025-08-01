/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { useEffect,useState } from 'react';
import './App.css'
//import Layout from './component/Layout'
import MainRouter from './MainRouter'

function App() {
  // Get user from localStorage
  const getUserFromStorage = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    return token && username ? {username}:null;
  }
  const [user, setUser] = useState( getUserFromStorage());

  useEffect (() => {
    setUser(getUserFromStorage());
  },[]);

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  }
  return (
   
    <MainRouter user={user} onLogout={handleLogout}/>
  )
}

export default App
