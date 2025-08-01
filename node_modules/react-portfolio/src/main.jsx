/** 
 * File:Contacts.jsx
 * Student Name:Cyrus Maina
 * Student Id:301147699
 * Date:
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import App from './App.jsx'

import{BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
    
  </StrictMode>,
)
