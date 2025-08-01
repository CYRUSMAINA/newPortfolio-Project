import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Projects from './component/Projects';
import Contacts from './component/Contacts';
import Experience from './component/Experience';
import Register from './component/Register';
import Login from './component/Login';
import ProjectDetails from './component/project_details';

function App() {
  const getUserFromStorage = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    return token && username ? { username } : null;
  };

  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    
      <Routes>
        <Route path="/" element={<Layout user={user} onLogout={handleLogout} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="experience" element={<Experience />} />
      
          <Route path="project-details" element={<ProjectDetails />} />
          <Route path="project-details/:id" element={<ProjectDetails />} />
          <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} />
          
        </Route>
      </Routes>
    
  );
}

export default App;
