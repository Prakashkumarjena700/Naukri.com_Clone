import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "./SinglejobPage.css"
import { AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsWallet2, BsBagDash } from "react-icons/bs";
import Footer from '../Components/Footer'

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

  console.log(obj)

  return (
    <div style={{backgroundColor:'#f4f3f3'}} >
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
          <h2>Job description</h2>
          {
            obj.jd && obj.jd.map((ele) => <h3>{ele}</h3>)
          }
          <br />
          <br />
          <span>Role</span>
          <p>{obj.role}</p>
          <span>Industry Type</span>
          <p>{obj.type}</p>
          <span>Department</span>
          <p>{obj.dept}</p>
          <span>Employment Type</span>
          <p>Full Time, Permanent</p>
          <span>Role Category</span>
          <p>{obj.cat}</p>
        </div>
        <div className='jobSinglePageSecondCtrnl' >
          <div className='FirstContainer' >
            <h2>Jobs you might be interested in</h2>
            <div>
              <div>
                <h4>{obj.name && obj.name}</h4>
                <p><HiOutlineLocationMarker /> {obj.address && obj.address.substring(0, 20)}</p>
                <p><BsWallet2 /> Not Disclosed</p>
                <p><BsBagDash /> {obj.exp && obj.exp}</p>
              </div>
              <img src={obj.logo && obj.logo} alt="" />
            </div>
          </div>
          <div className='SecondContainerSp' >
            <div>
              <div>
                <h4>Reviews</h4>
                <p>Area Sales Manager in Jammu, Jammu & Kashmir</p>
                <p>Anonymous</p>
                <p>
                  <AiFillStar color='#ffc57c' />
                  <AiFillStar color='#ffc57c' />
                  <AiFillStar color='#ffc57c' />
                  <AiFillStar color='#ffc57c' />
                  <AiFillStar color='#ffc57c' />
                </p>
              </div>
              <div>
                <p>powered by</p>
                <img src="https://static.ambitionbox.com/static/logo.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
