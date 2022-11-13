import React from 'react'
import './Navbar.css'
import { navItem } from './NavbarItem'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { JobDropDown, CompaniesDropDown, ServicesDropDown, ForemployersDropDown } from './DropDown'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Navbar() {
    const [jobdropDown, setjobDropdown] = React.useState(false)
    const [companiesDropDown, setcompaniesDropDown] = React.useState(false)
    const [servicesDropDown, setservicesDropDown] = React.useState(false)
    const [foremployersDropDown, setForemployersDropDown] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [name, setName] = useState(' ')
    const [password, setPassword] = useState(' ')


    const login = () => {
        if(name===' ' || password===' '){
            alert('Please Enter Name and Password')
        }else{
            alert('Welcome')
        }
        
    }


    return (


        <div className='navbar' >
            <div >
                <div>
                   <Link to='/' > <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" /></Link>
                </div>
                <div className='nav-items' >
                    {
                        navItem.map((ele) => {
                            if (ele.title === 'Jobs') {
                                return (
                                    <li
                                        onMouseEnter={() => setjobDropdown(true)}
                                        onMouseLeave={() => setjobDropdown(false)}
                                    >   <p className='mainMenuItem' >{ele.title}</p>
                                        {jobdropDown && <JobDropDown />}
                                    </li>
                                )
                            }
                            if (ele.title === 'Companies') {
                                return (
                                    <li
                                        onMouseEnter={() => setcompaniesDropDown(true)}
                                        onMouseLeave={() => setcompaniesDropDown(false)}
                                    >   <p className='mainMenuItem' >{ele.title}</p>
                                        {companiesDropDown && <CompaniesDropDown />}
                                    </li>
                                )
                            }
                            if (ele.title === 'Services') {
                                return (
                                    <li
                                        onMouseEnter={() => setservicesDropDown(true)}
                                        onMouseLeave={() => setservicesDropDown(false)}
                                    >   <p className='mainMenuItem' >{ele.title}</p>
                                        {servicesDropDown && <ServicesDropDown />}
                                    </li>
                                )
                            }
                            return (
                                <li className='mainMenuItem' key={ele.id} >{ele.title}</li>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className='loginRegister' >
                    <button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                        Login
                    </button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        size='md'

                    >
                        <DrawerOverlay />
                        <DrawerContent className='loginBox' >
                            <DrawerCloseButton />
                            <DrawerHeader>Login</DrawerHeader>

                            <DrawerBody   >
                                <p>Register for free</p>
                                <label>Email ID / Username</label>
                                <Input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your activive Email ID / Username' /><br /><br />
                                <label>Password</label>
                                <Input type='text' onChange={(e) => setPassword(e.target.password)} placeholder='Enter your password' />
                                <p>Forgot Password?</p>
                                <button className='loginBtn' onClick={login} >Login</button>
                                <p>Use OTP to Login</p>
                                <p> or </p>
                                <div className='devider' ></div>
                                <button className='signinWithGoogleBtn' > <img width='20px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" /> Sign in with Google <p>{''}</p> </button>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <button><Link to='/register' >Register</Link></button>
                </div>
                <div className='forEmployer'
                    onMouseEnter={() => setForemployersDropDown(true)}
                    onMouseLeave={() => setForemployersDropDown(false)}
                >   <p className='mainMenuItem' >| &nbsp; For employer  <ChevronDownIcon /> </p>
                    {foremployersDropDown && <ForemployersDropDown />}
                </div>
            </div>
        </div>
    )
}
