import React from 'react'
import NavTod from './NavTod'

const DeleteTod = () => {
  return (
    <div>
        <NavTod/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xx-12"></div>
                <label htmlFor="" className="form-label">delete tod</label>
                <input type="text" className="form-control" />
                <button className="btn btn-danger">delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteTod