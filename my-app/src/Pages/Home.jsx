import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Input, InputGroup, Button, Select, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon, RepeatClockIcon, ChevronRightIcon } from '@chakra-ui/icons'
import './Home.css'
import { firstFlexData, secondFlexData } from '../Components/HomeCopmData'
import { TopcompanieshiringnowSlider, FeaturedcompanieSlider, HelfSlider } from '../Components/HomeSlider'


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
          <Button >Search</Button>
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
        <p style={{border:'1px solid #ffc2b2',backgroundColor:'#fff1ed'}} >All</p>
        <p>IT Services</p>
        <p>Technology</p>
        <p>Manufacturing & Production</p>
        <p>Healthcare & Life Sciences</p>
        <p>BFSI</p>
        <span>+5 more</span>
      </div>
      {/* <div className='threeCard' >
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  )
}
