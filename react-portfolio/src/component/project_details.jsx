import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";


const ProjectDetails =()=>{
    const [project,setProject] =useState({
        name:'',
        description:'',
        startDate:'',
        endDate:''
    });
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            const fetchProject = async () => {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login");
                    return;
                }
                try{
                    const response = await fetch(`/api/project/${id}`,{
                        headers:{
                            'Authorization':`Bearer ${token}`,
                        }
                    })
                    if(!response.ok){
                        throw new Error ('Failed to fetch project details');
                    }
                    const data = await response.json();
                    setProject({
                        name:data.name,
                        description:data.description,
                        startDate:data.startDate.split('T')[0],
                        endDate:data.endDate.split('T')[0]

                    })
                } catch (error)
                {
                    console.error(`Error fetching project details.${error.message}`);
                }
            };
             fetchProject();
        }
    },[])
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const url = id ? `/api/projects/${id}` : '/api/projects';
            const method = id ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(project)
             });
             if (!response.ok) {
                throw new Error('Failed to save project');
             }
             navigate('/projects');
            } catch (error) {
                console.error(`Error saving project: ${error.message}`);
            }
        };

        return(
        <div className="container mt-4">
            <h1 className="text-center">{id ? 'Update Project' : 'Create New Project'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Project Name</label>
                    <input 
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                    className="form-control"
                    required/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    className="form-control"
                    required/>
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <input
                    type="date"
                    name="startDate"
                    value={project.startDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                    />
                </div>
                <div className="form-group">
                    <label>End Date</label>
                    <input
                    type="date"
                    name="endDate"
                    value={project.endDate}
                    onChange={handleChange}
                    className="form-control"
                    required
                    />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        {id ? 'Update' : 'Create'}
                        </button>
                        </form>
                        </div>
                        );
};

export default ProjectDetails;