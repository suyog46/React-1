
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Category() {
    let {cid}=useParams();
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=6e2da8b9649c4062aa8fb093de0f2af4`).then((res)=>res.json()).then((a)=>setdata(a.articles))//yes ma chai a.product because array vitra object xa
    },[])
  return (
    <>
    <h4 className='text-center text-danger'>**Images are not shown because API does not contain it</h4>
    <h1 className='pt-5 text-center'>
        {cid}
    </h1>
    <div className="container">

 
    {
        data.map((a)=>(
    <div className='col-6 mx-auto' key={a.id}>
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
    
    
    </>
  )
}

export default Category



