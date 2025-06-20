import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home"
import Blogs from "./Blogs"
import About from "./About"
import Project from"./Project"
import Contactme from"./Contactme"
import Assignments11 from './Assignments11';
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
    
     <Routes>
        <Route path="" element={<Assignments11 />}/>
      
          <Route path="users" element={<Blogs />} />
        
          <Route path="about" element={<About />} />

          <Route path="home" element={<Home />} />

          <Route path="project" element={<Project />} />

          <Route path="contactme" element={<Contactme />} />


        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
