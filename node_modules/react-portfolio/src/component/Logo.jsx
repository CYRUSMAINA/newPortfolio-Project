/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/


export default function Logo()
{
     return(
      <div className="logo-box">
         

          <svg 
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          >
               <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="4"/>

               <text
               x="50" 
               y="55" 
               textAnchor="middle" 
               fontSize="50" 
               fill="black" 
               fontWeight="bold"
               fontFamily="'Fira Code', monospace"
               > {'CM' }
               </text>


          </svg>
      
       </div>
       
     )
}