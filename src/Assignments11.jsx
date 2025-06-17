import './App.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Assignments11() {

const [userData, setUserData] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/link4/')
            .then(response => response.json())
            .then(data => {setUserData(data)
console.log(data);
            });
    }, []);

useEffect(() => {
        console.log(userData);
    }, [userData]);

  return (
   
    <>
    <h1>
        react heading blogs
    </h1>
<Link to="/home">go to Home</Link>
 <div>
        {userData&&userData.map(profile => (
          <div key={profile.pk} className='blog'>

            <h3>{profile.pk}</h3>
            <p> {profile.fields.year}  {profile.fields.department}</p><br></br>
           
             <p><strong>Details:</strong>{profile.fields.details}</p><br></br>
            <p><strong>Deadlines:</strong>{profile.fields.deadlines}</p><br></br>

            {/* You can display other fields as needed */}
            
          </div>
        ))}
      </div>

    </>
  )
}

export default Assignments11