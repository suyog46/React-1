import React, { useContext } from 'react'
import contextvar from './Usecontext' //yo chai function
function B() {
    let value=useContext(contextvar)//createcontext and usecontext chai hook 
    console.log(value)
  return (
    <div>B {value}</div>
  )
}

export default B