import React, { useRef } from 'react'

function Userefrence() {
    let a=useRef()
    let q=()=>{
        a.current.focus(); //csss change garna milyo
        //a.current chai useref kai attribute ho
    }
  return (
    <>
    <div>Userefrence</div>
    <input type="text" ref={a} /> 
    {/* ref chai to be manipulated name */}
    <button onClick={q}>Focus</button>
    </>
  )
}

export default Userefrence