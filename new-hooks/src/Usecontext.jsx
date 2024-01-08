import React, { createContext } from 'react'
import A from './A'
import B from './B'

 export var contextvar=createContext()

function Usecontext() {
  return (
    <>
    <div>Usecontext API hook</div>
    <contextvar.Provider value="suyog">
        <A/>
        <B/>
        </contextvar.Provider> 
    </>
    
  )
}

export default Usecontext