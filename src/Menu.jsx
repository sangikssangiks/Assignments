
import './App.css'
import { Outlet, Link } from "react-router-dom";
function Menu() {


  return (
    <>

    
      <div className="menu">

      <ul>
   
        <li>   <Link to="/home">Home</Link></li>
        <li>   <Link to="/about">About</Link></li>
        <li>   <Link to="/users">users</Link></li>
        <li>   <Link to="/project">Project</Link></li>
        <li>   <Link to="/Contactme">Contactme</Link></li>
      
     
         
        
       
        
      </ul>
      <Outlet />
</div>
    </>
  )
}

export default Menu
