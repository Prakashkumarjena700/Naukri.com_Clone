import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "./SinglejobPage.css"
import { AiFillStar } from "react-icons/ai";
const getData = (url) => {
  return axios.get(url)
}

export default function SinglejobPage() {
  const { id } = useParams()

  const [obj, setObj] = useState({})

  useEffect(() => {
    getData(`https://prakash-vercel-database.vercel.app/naukridata/${id}`)
      .then((res) => setObj(res.data))
  }, [])

  return (
    <div>
      <div className='SinglepagefirstDiv' >
        <div>
          <div>
            <p> {obj.name}</p>
            <p>{obj.comp} {obj.rating} <AiFillStar color='#ffc57c' /></p>
          </div>
          <div>
            <p>Send Me Jobs Like This</p>
            <button>APPLY</button>
          </div>
        </div>
      </div>
      <div className='jobSinglePageMainContainer' >
        <div>
          <p>Job description</p>
          {
            obj.jd.map((ele) => <li>{ele}</li>)
          }
        </div>
        <div></div>
      </div>
    </div>
  )
}
