import React, { useEffect, useState } from 'react'
import NavTod from './NavTod'
import axios from 'axios'

const ViewTod = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((Response)=>{
            changedata(Response.data)
        }
    ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <NavTod/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-lg-12 co-xl-12 col-xxl-12"></div>

                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map(
(value,index)=>{

    return <tr>
    <th scope="row">{value.userId}</th>
    <td>{value.id}</td>
    <td>{value.title}</td>
    <td>@mdo</td>
  </tr>
}

    )
   }
    
  </tbody>
</table>

            </div>
        </div>
    </div>
  )
}

export default ViewTod