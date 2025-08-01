/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Contacts()
{
   const [formData, setFormData] = useState({
      firstName:"",
      lastName:"",
      contactNumber:"",
      email:"",
      message:"",

   });
   const navigate = useNavigate();
   const handleChange = (e)=>{
      const {name,value}=e.target;
      setFormData(prev => ({...prev,[name]: value,}));
   }
   const handleSubmit = (e)=>{
      e.preventDefault();
      alert("Message sent successfully!");
      console.log("form Submited:",formData);
      navigate('/')
   }
     return(
      <div className="contacts-container">
         <h1>Contact Me</h1>
         <div style={{marginBottom:"30px",padding:"15px",border:"1px solid #ccc",borderRadius:"8px"}}>
            <h2>Contact Info</h2>
            <p><strong>Email:</strong>ciiracyrus@gmail.com</p>
             <p><strong>Phone:</strong>4162763786</p>
              <p><strong>Location:</strong>Mississauga,Canada</p>

         </div>
         {/*------------------contact form-------------------*/}
         <form onSubmit={handleSubmit} style={{maxWidth:"400px"}}>
            <div style={{marginBottom:"10px"}}>
               <label>First Name:</label><br/>
               <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>

            </div>
            <div style={{marginBottom:"10px"}}>
               <label>Last Name:</label><br/>
               <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>

            </div>
            <div style={{marginBottom:"10px"}}>
               <label>Contact Number:</label><br/>
               <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required/>

            </div>
            <div style={{marginBottom:"10px"}}>
               <label>Email:</label><br/>
               <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

            </div>
            <div style={{marginBottom:"10px"}}>
               <label>Message:</label><br/>
               <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" />
            </div>
            <button type="submit">Send Message</button>
         </form>
        
      </div>
        
     )
}