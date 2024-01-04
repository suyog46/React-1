import React from 'react'
import data from '../Data'
import '../style.css'
function Home(props) { 
    let dd=data.filter((b)=>b.category==props.tt)
  return (
    <>
    <h1>This is the home page</h1>
    <h3>See the nav links</h3>
    <section className='container'>
        <h1>{props.tt}</h1>
    
        <div className="btt text-end">
        <button className="btn btn-primary">Show more</button>  
        </div>
        <div className="row">
    {dd.slice(0,8).map((a)=>    //slice le chai array bata 4 ota matra lini vayo
            <div className="col-lg-3 g-3">
                <div className="card">
                    <img src={a.image} alt="" className='w-100 i'/>
                    <div className="card-body">
                        <h3>{a.title}</h3>
                            <p>{a.description}</p>
                    </div>
                </div>
            </div>
        )}
        </div>
        </section>
    </>
  )
}

export default Home