import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ()=>{

    const [form,setForm] = useState({
        username:'',
        password:'',
        email:''

    });
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
       // e.preventDefault();
        const{name,value}=e.target;
        setForm({...form,[name]:value})
    }
    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      // Parse error message from backend response JSON
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.user.username);

    navigate('/');
  } catch (error) {
    setError(error.message);
  }
};

   
    return(
        <div className="container mt-4">
            {error && <div className="alert alert-danger">{error}</div>}
            <h1 className="text-center">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={form.username} onChange={handleChange} className="form-control" required/>

                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="form-control" required/>

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={form.password} onChange={handleChange} className="form-control" required/>

                </div>
                <button type="submit" className=" btn btn-primary">Register</button>

            </form>
        </div>
        
    )

}
export default Register