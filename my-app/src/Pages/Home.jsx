import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Input, InputGroup, Button, Select, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon, RepeatClockIcon, ChevronRightIcon } from '@chakra-ui/icons'
import './Home.css'
import { firstFlexData, secondFlexData } from '../Components/HomeCopmData'
import { TopcompanieshiringnowSlider, FeaturedcompanieSlider, HelfSlider, SponsoredSlider, HomelastSliderSlider } from '../Components/HomeSlider'
import { BsPencil, BsLightningCharge } from 'react-icons/bs'
import { AiFillFileText, AiOutlineRight } from 'react-icons/ai'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'


export default function Home() {


  return (
    <div>
      <Navbar />
      <h1 className='speacer' >-</h1>
      <div className='firstDiv' >
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <div className='searchDiv' >
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />
              }
            />
            <Input type='tel' placeholder='Enter skills / designations / companies'
              focusBorderColor='white'
            />
          </InputGroup>
          <Select placeholder='Select experience' focusBorderColor='white' >
            <option value="">fresher(less than 1 year)</option>
            <option value="">1 year</option>
            <option value="">2 year</option>
            <option value="">3 year</option>
            <option value="">4 year</option>
            <option value="">5 year</option>
            <option value="">12 year</option>
          </Select>
          <Input type='text' focusBorderColor='white' placeholder='Enter location'></Input>
          <Button ><Link to='/searchpage' >Search</Link></Button>
        </div>
      </div>
      <div className='homePage3Btn' >
        <Button color='#445578' b='#8292b4' borderRadius='3xl' variant='outline' ><RepeatClockIcon color='#8292b4' /> &nbsp;  dsg,find your dream now</Button>
        <Button color='#445578' b='#8292b4' borderRadius='3xl' variant='outline'  > <RepeatClockIcon color='#8292b4' /> &nbsp; developers &nbsp;
          <span className='smallFontColor' > 5320 new </span></Button>
        <Button color='#445578' b='#8292b4' borderRadius='3xl' variant='outline' ><RepeatClockIcon /> &nbsp;
          web developer &nbsp;
          <span className='smallFontColor' > 148 new</span>
        </Button>
      </div>
      <div className='firstFlexDiv'>
        {
          firstFlexData.map((ele) => <div key={ele.name}  >
            <p>{ele.logo}</p>
            <p>{ele.name}</p>
            <p><ChevronRightIcon /></p>
          </div>)
        }
      </div>
      <div className='firstFlexDiv'>
        {
          secondFlexData.map((ele) => <div  >
            <p>{ele.logo}</p>
            <p>{ele.name}</p>
            <p><ChevronRightIcon /></p>
          </div>)
        }
      </div>
      <h1 className='homePageHeading' >Top companies hiring now</h1>
      <TopcompanieshiringnowSlider />
      <h1 className='homePageHeading' >Featured companies actively hiring</h1>
      <FeaturedcompanieSlider />
      <button className='viewAllCompaniesBtn' >View all companies</button>
      <div className='halfSliderContainer' >
        <img src="https://static.naukimg.com/s/0/0/i/role-collection.png" alt="" />
        <h2>Discover jobs across <br /> popular roles</h2>
        <p>Select a role and we'll show <br /> you relevant jobs for it!</p>
        <HelfSlider />
      </div>
      <h1 className='homePageHeading' >Sponsored companies</h1>
      <div className='Sponsored' >
        <p style={{ border: '1px solid #ffc2b2', backgroundColor: '#fff1ed' }} >All</p>
        <p>IT Services</p>
        <p>Technology</p>
        <p>Manufacturing & Production</p>
        <p>Healthcare & Life Sciences</p>
        <p>BFSI</p>
        <span>+5 more</span>
      </div>
      <SponsoredSlider />
      <button className='viewAllCompaniesBtn' >View all companies</button>
      <div className='threeCard' >
        <div>
          <button>by AmbitionBox</button>
          <h1>Prepare for your next interview</h1>
          <img src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="" />
        </div>
        <div>
          <h2>Interview questions by company</h2>
          <div className='interviewQuestion' >
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png" alt="" />
              </div>
              <div>
                <p>Flipkart</p>
                <p>488 Interviews</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png" alt="" />
              </div>
              <div>
                <p>Cognizant</p>
                <p>1.6K+ Interviews</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png" alt="" />
              </div>
              <div>
                <p>Byjus</p>
                <p>816 Interviews</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png" alt="" />
              </div>
              <div>
                <p>TCS</p>
                <p>2.5K+ Interviews</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png" alt="" />
              </div>
              <div>
                <p>Amazon</p>
                <p>1.7K+ Interviews</p>
              </div>
            </div>
            <div>
              <div>
                <img src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png" alt="" />
              </div>
              <div>
                <p>Accenture</p>
                <p>2K+ Interviews</p>
              </div>
            </div>

          </div>
          <h3>View all companies {' >'}</h3>
        </div>
        <div>
          <h2>Interview questions by role</h2>
          <div>
            <p>Software Engineer  <span>(7.2K+ questions)</span></p>
            <p>Business Analyst <span>(2.8K+ questions)</span></p>
            <p>Consultant <span>(2.4K+ questions)</span></p>
            <p>Financial Analyst <span>(894 questions)</span></p>
            <p>Sales & Marketing<span>(991 questions)</span></p>
            <p>Quality Engineer <span>(1.3K+ questions)</span></p>
          </div>
          <h3>View all roles {'>'}</h3>
        </div>
      </div>
      <div className='accelerateDiv' >
        <div> <img src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="" /> </div>
        <div>
          <h2>Accelerate your job search with premium services</h2>
          <p>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
          <div className='btnDiv' >
            <button> <BsPencil color='#a4acf6' /> Resume writing <AiOutlineRight color='#a4acf6' /> </button>
            <button> <BsLightningCharge color='#a4acf6' /> Priority applicant<AiOutlineRight color='#a4acf6' /></button>
            <button><AiFillFileText color='#a4acf6' /> Resume display<AiOutlineRight color='#a4acf6' /></button>
          </div>
        </div>
        <div>
          <button>Learn more</button>
          <p>Includes paid services</p>
        </div>
      </div>
      <div className='lastSliderContainer' >
        <button> by Naukri Learning</button>
        <h1>Grow your career <br /> through learning</h1>
        <img src="https://static.naukimg.com/s/0/0/i/learn-icon.svg" alt="" />
        <HomelastSliderSlider />
      </div>
      <div className='scannerDiv'>
        <div>
          <h1>10M+ users are on the <br /> Naukri app</h1>
          <p>Get real-time job updates & more!</p>
          <div className='inputBox' >
            <p>Enter mobile number...</p>
            <p>Get link</p>
          </div>
          <div>
            <button><img src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png" alt="" /></button>
            <button><img src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png" alt="" /></button>
          </div>
        </div>
        <div>
          <img src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup.png" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
