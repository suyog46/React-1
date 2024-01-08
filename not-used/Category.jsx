import React from 'react'
import React, { useState,useEffect } from 'react'
function Category() {
    let {cid}=useparams()
    const[data,setdata]=useState([])//data ko initial value chai array ho vaneko

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=6e2da8b9649c4062aa8fb093de0f2af4`).then((res)=>res.json()).then((a)=>setdata(a.articles))//yes ma chai a.product because array vitra object xa
    },[])
  return (
    <ul>
    {
        data.map((a)=>(//curly bracket use gaaryo vani return garnu parxa
    <li key={a.id}>
        {a.title}
    </li>
        ))
    }
</ul>
  )
}

export default Category


