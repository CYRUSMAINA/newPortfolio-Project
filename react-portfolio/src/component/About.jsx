/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import Profile from "../assets/Profile.jpg";
export default function About()
{
     return(
      <div className="about-container">
         <h1>About Me</h1>
         <img 
         src={Profile}
         alt="Profile of Cyrus Maina"
         style={{width:'150px',borderRadius:'8px',marginBottom:'1rem'}}

         />
         <h2>Cyrus C Maina</h2>
         <p> 
          I am a passonate, dedicated to developing my  web application 
          skills in React,Javascript  and full stack development.
          I aim to create a clean and user-friendly web experiences.
          </p>
          <p>
        I enrolled in the Health Informatics Technology program in 2021 at Centennial College to transition into
        the tech field. I’ve since built several hands-on projects and am
        currently working to develop my
        technical skills.
      </p>
      <p>
        <strong>Tools I’m working with:</strong> React, JavaScript,
        HTML, CSS, Node.js, Express, MongoDB, Oracle SQL, C#
      </p>
      <p>
        I'm actively seeking internship or junior developer opportunities where
        I can apply my knowledge, continue learning, and contribute to
        real-world projects in a collaborative team environment.
      </p>
      <hr />

      <h2>Education & Coursework Highlights</h2>

      <h3>Current Courses</h3>
      <ul>
        <li>Web Application Development</li>
      </ul>

      <h3>Completed Courses</h3>
      <ul>
        <li>Data Structures & Algorithms</li>
        <li>Enterprise Systems Integration (ESI)</li>
        <li>IT Project Management</li>
        <li>Advanced Database Concepts (MySQL/SQL Server)</li>
        <li>Software Testing & Quality</li>
        <li>Clinical Workflow & IT Solutions</li>
        <li>Tools, Algorithms & Methods for HCIS</li>
        <li>Programming in C#, JavaScript, Python</li>
        <li>Client-side Web Development</li>
        <li>Unix/Linux, Networking for Developers</li>
        <li>Business Communication, Entrepreneurship</li>
      </ul>
    
         </div>
       
     )
}