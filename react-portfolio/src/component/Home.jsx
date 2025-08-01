/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home()
{
    const [data,setData] = useState(null);

     useEffect(() => {
    fetch('/api/data') 
      .then((res) => res.json())
      .then((dataFromServer)=> setData(dataFromServer))
      .catch(err => console.error("API fetch failed:", err));
  }, []);
     return(
        <>
        
        <div className="home-container">
            
            <h1>Hey there,I am Cyrus Maina.</h1>
            <h2>{data && data.message}</h2>
            <p>This site showcases my skills,projects and experience. </p>
            <section style={{marginTop:'2rem',marginBottom:'2rem'}}>
            <h3>Mission statement</h3>
            <p>My mission is to grow as full stack developer by continuously learning 
                and creating great apps</p>
            </section>
            <div  style={{marginTop:'2rem'}}>
                <Link to="/about">
                <button className="cta-button">Learn more about me</button>
                 </Link>
            </div>
        </div>
        </>
     )
}