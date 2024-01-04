import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data';

function Detail() {
    let { did } = useParams()
    let dis = data.find((a) => a.id == did)
    return (
        <>

            <div>Detail</div>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={dis.image} alt="" />
                    </div>

                </div>
                <div className="col-8">
                    <div className="card">
                        <h1>{dis.title}</h1>
                        <p>{dis.description}</p>
                        <h2>price:{dis.price}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail