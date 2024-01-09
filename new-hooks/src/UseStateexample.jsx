import React, { useState } from 'react'

function UseStateexample() {
    let[input,setinput]=useState('suyog')
    let abc=(a)=>{
        setinput(a.target.value)//input bata change vako value linxa
    }
    let pr=(b)=>{
        b.preventdefault()
    }
  return (
    <div>
        <h1>
        Form example
        </h1>
<form onSubmit={pr}>
    <h1 className='text-light text-center'>{input}</h1>
    <input type="text" className='border border-primary' onChange={abc}/>
    <button className="btn btn-primary">send</button>
</form>
    </div>
  )
}

export default UseStateexample;