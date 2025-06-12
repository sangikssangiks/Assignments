import './App.css'
import { useState } from 'react'
function Project() {
const [a1,seta1]=useState(0)
const [a,seta]=useState(0)
const geta=(x)=>{
seta(x.target.value)

}
  return (

    <>
    <h1>{a}</h1>
       <input type="text" value={a}  onChange={geta}></input>
         <input type="text" value={a1}  onChange={(x)=>seta1(x.target.value)}></input>
             <h1>{a1}</h1>
    </>
)
}

export default Project