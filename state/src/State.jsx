import React, { useEffect, useState } from 'react'

function State() {
    const [cup,setcup]=useState(0)
    //cup vaneko chai variable ani setcup vaneko chai updated function which again stores value in cup..ani usestate ma chai initial value
    const[data,setdata]=useState([])//data ko initial value chai array ho vaneko
    var abc=()=>{
        setcup(cup+1)
    }
    var sub=()=>{
        setcup(cup-1)
    }


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((a)=>setdata(a.products))//yes ma chai a.product because array vitra object xa
    },[])

    //duita argument linxa ..yeuta function ani arko dependency
  return (
    <>
    <h1>Usestate</h1>
    {cup}
    <button onClick={abc}>++</button> 
    <button onClick={sub}>--</button>    
    <ul>
        {
            data.map((a)=>(//curly bracket use gaaryo vani return garnu parxa
        <li key={a.id}>
            {a.title}
        </li>
            ))
        }
    </ul>
    </>
// return vitra chai curly bracket hunxa
// return bahira hudaina
  )
}

export default State