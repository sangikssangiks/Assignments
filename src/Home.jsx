import './App.css'
import "./mycss.css"
import { useEffect, useState } from 'react'
function Home() {
const [a,seta]=useState([])
const functiontest=()=>{
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{console.log(data);
  seta(data.products)
});
}
useEffect(()=>{
  console.log(a,"test")
},[a])


  return (

    <>
    <h1>
        react heading home
    </h1>
    <button onClick={functiontest}>click</button>
   
     <ul>
      {
       a && a.map((x,y)=>{
       return  (
        <div className="style1">
          <li key={y}>{x.title}</li><p>
            {x.description}
          </p>
        </div>
       ) 
        })
      }
     </ul>
    </>
)
}

export default Home 