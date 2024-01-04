import React from 'react'
import {useParams,Link } from 'react-router-dom';
import data from '../Data';
function Category() {
    let { cid } = useParams()
    let dd = data.filter((a) => a.category==cid)
    // useparams le aafu jun url ma xa ,tesko last part chai linxa
    return (
        <>
            
  
            <section className='container'>
                <h1>{cid}</h1>
                <p >Click on <span className='text-danger'>view Details</span> to see the details</p>
                {dd.length==0?'Oh there seems to be no data':''}
                {/* ternary operator is used by seeing the dd.length?truecondition:false condition */}
                <div className="btt text-end">
                    <button className="btn btn-primary">Show more</button>
                </div>
                <div className="row">
                    {dd.map((a) =>    
                        <div className="col-lg-3 g-3">
                               <Link to={`/details/${a.id}`}><p className="btn btn-primary">View detail</p></Link>
                            <div className="card">
                                <img src={a.image} alt="" className='w-100 i' />
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

export default Category;