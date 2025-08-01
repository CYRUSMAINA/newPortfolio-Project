/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects()
{
  const [projects,setProjects] = useState([]);
  const navigate = useNavigate();
   useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(`Error fetching projects: ${error.message}`);
      }
    };

    fetchProjects();
  }, [navigate]);

 const handleDelete = async (projectId) => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    console.error("No token found, redirecting to login");
    return;
  }

  try {
    const response = await fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete project");
    }

    // Remove the deleted project 
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== projectId)
    );
  } catch (error) {
    console.error(`Error deleting project: ${error.message}`);
  }
};


     return(
      <div className="projects-container mt4">
          <h1 className="text-center">Projects</h1>
           <div className="text-center">
          <button className="btn btn-primary mb-3"onClick={()=> navigate('/project-details')}>
            Create New Project</button> 
            {projects.length > 0 ? (
              
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                  </tr>
                  
                </thead>
                <tbody>
                  {projects.map ((project)=>(
                    <tr key={project._id}>

                      <td>{project.name}</td>
                      <td>{project.description}</td>
                      <td>{new Date(project.startDate).toLocaleDateString()}</td>
                      <td>{new Date(project.endDate).toLocaleDateString}</td>

                      <td>
                        <button className="btn btn-secondary me-2" onClick={()=> navigate(`/project-details/${project._id}`)}>Update</button>
                        <button className="btn btn-danger" onClick={()=> handleDelete(project._id)}>Delete</button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
              
            )
            :
            (
              

              <p className="text-center ">No project found</p>
            
            )}
            </div>
          {/*-----------------------project 1---------------------------*/}
          <div className="project">
            <img src="react.svg" alt="React Portfolio" width="300" /> 
            <h2>My Portfolio</h2>
            <p><strong>Role:</strong>Developer</p>
            <p>This portfolio was built using React to showcase my work and skills.
              It has 5 pages, Home,About,Projects,Service and contacts.</p>
              <div className="project-links">
                <a href="https://github.com/CYRUSMAINA/COMP229-Week2.git" target="_blank" rel="noopener noreferrer" className="project-button">
                View Code 
                </a>
              </div>
          </div>
          {/*------------------------project 2---------------------------*/}
           <div className="project">
        <h2>SimpleEMR</h2>
        <p><strong>Technologies:</strong> C#, Oracle SQL</p>
        <p>
          Developed a simplified Electronic Medical Records (EMR) system to manage patient data, appointments, and medical history with secure access controls.
        </p>
        <div className="project-links">
          <a href="https://github.com/CYRUSMAINA/SimpleEMR_C-sharp_n_SQL.git" target="_blank" rel="noopener noreferrer" className="project-button">
            View Code
          </a>
        </div>
      </div>
{/*----------------project 3-------------------------*/}
     <div className="project">
        <h2>Online Bookstore Database System</h2>
        <p><strong>Technologies:</strong> SQL, Advanced Database Concepts</p>
        <p>
          Designed and implemented a comprehensive database system for an online bookstore, including inventory management, customer orders, and sales reporting.
        </p>
        <div className="project-links">
          <a href="https://github.com/CYRUSMAINA" target="_blank" rel="noopener noreferrer" className="project-button">
            View my GitHub
          </a>
          
        </div>

    </div>

</div>
       
     );
}