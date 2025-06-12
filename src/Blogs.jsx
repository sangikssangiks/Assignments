import './App.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Blogs() {

const [userData, setUserData] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/link3/')
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

 <div>
        {userData&&userData.map(profile => (
          <div key={profile.pk} className='blog'>

            
           
            <p>Department: {profile.fields.department}</p>
            <p>Year: {profile.fields.year}</p>
            <p>Details:{profile.fields.details}</p>
            <p>Deadlines: {profile.fields.deadlines}</p>
            {/* You can display other fields as needed */}
            
          </div>
        ))}
      </div>

    </>
  )
}

export default Blogs 