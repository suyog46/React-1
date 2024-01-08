import React, { useReducer } from 'react'
function reducer(state,action){
    switch (action.type){
        case "inc": return{age:state.age+1}
        case "dec": return{age:state.age-1}
    
    }
}
function Usereduce() {
    var[state,dispatch]=useReducer(reducer,{age:20})
  return (
 <>
 <div>Usereduce</div>
 <h1>my age is {state.age} </h1>
 <button onClick={()=>{dispatch({type: 'inc'})}}>INCREASE </button>
 <button onClick={()=>{dispatch({type: 'dec'})}}>DECREASE </button>
 
 </>
  )
}

export default Usereduce