import React, { useState,useEffect } from 'react'

function Home() {
    const[data,setdata]=useState([])//data ko initial value chai array ho vaneko

    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6e2da8b9649c4062aa8fb093de0f2af4').then((res)=>res.json()).then((a)=>setdata(a.articles))//yes ma chai a.product because array vitra object xa
    },[])
  return (

    <>

    <div className="container">

 <div className="row g-5">
    {
        data.map((a)=>(
    <div className='col-8 mx-auto' key={a.id}>
        <div className="card">
        <img src={a.urlToImage} className='w-100'/>
            <div className="card-body">
                {a.title}
            </div>
        </div>
    </div>
        ))
    }
    </div>
   </div>
    
    </>
  )
}

export default Home