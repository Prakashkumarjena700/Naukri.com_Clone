import React from 'react'
import './Register.css'
import { CheckIcon } from '@chakra-ui/icons'

export default function Register() {
    return (
        <div>
            <div className='registerNavbar' >
                <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                <p>Already Registered? <span style={{ color: '#4a90e2' }} >Login</span> here</p>
            </div>
                <img className='fixedImage' src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="" />
            <div className='registerPageFixedBox' >
                <h2>On registering, you can</h2>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' /> Build your profile and let &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; recruiters find you</p>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' />Get job postings delivered &nbsp; &nbsp; &nbsp; &nbsp; right to your email</p>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' />Find a job and grow your &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; career</p>
            </div>
        </div>
    )
}
