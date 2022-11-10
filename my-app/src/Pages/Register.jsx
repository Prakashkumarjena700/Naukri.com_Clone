import React from 'react'
import './Register.css'
import { CheckIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import { BsWhatsapp } from "react-icons/bs";

export default function Register() {
    return (
        <div >
            <div className='registerNavbar' >
                <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                <p>Already Registered? <span style={{ color: '#4a90e2' }} >Login</span> here</p>
            </div>
            <img className='fixedImage' src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg" alt="" />
            <div className='registerPageFixedBox' >
                <h2>On registering, you can</h2>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' /> Build your profile and let &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; recruiters find you</p>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' /> Get job postings delivered &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; right to your email</p>
                <p><CheckIcon h={3.5} w={3.5} bg='#18c1a3' borderRadius='xl' p='0.5' color='white' /> Find a job and grow your &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; career</p>
            </div>
            <div className='registerForm' >
                <h1>Find a job & grow your career</h1>
                <p className='inputTop' >Full Name</p>
                <Input placeholder='What is your name ?' ></Input>
                <p className='inputTop' >Email Id</p>
                <Input placeholder='Tell us your Email ID' ></Input>
                <p className='inputBot' >We'll send you relevant jobs in your mail</p>
                <p className='inputTop' >Password</p>
                <Input placeholder='Create a password for your acount' ></Input>
                <p className='inputBot' >Minimum 6 characters required</p>
                <p className='inputTop' >Mobile Number</p>
                <Input placeholder='+91 Mobile Number' ></Input>
                <p className='inputBot'>Recruiters will call you on this number</p>
                <p className='inputTop' >Work Status</p>
                <div className='workStatus' >
                    <div>
                        <div>
                            <img src="https://static.thenounproject.com/png/863512-200.png" alt="" />
                        </div>
                        <div>
                            <h3>I'm Experienced</h3>
                            <p>I have work experience (excluding internships)</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://freepngimg.com/thumb/gloves/55170-1-school-bag-image-free-download-image.png" alt="" />
                        </div>
                        <div>
                            <h3>I'm a Fresher</h3>
                            <p>I am a student/ Haven't worked after graduation</p>
                        </div>
                    </div>
                </div>
                <p className='inputTop' >Resume</p>
                <Input type='file' placeholder='Upload Resume' ></Input>
                <p className='inputBot' >Recruiters give first preference to candidates who have a resume</p>
                <div className='getUpdateBox' ><input type='checkbox' ></input>&nbsp; Send me important updates on  &nbsp; <BsWhatsapp style={{ backgroundColor: '#48c857', color: 'white', borderRadius: '50%', display: 'inline-block' }} /> &nbsp; WhatsApp </div>
                <p className='smallFont' >By clicking Register, you agree to the <span className='smallFontColor' >Terms and Conditions</span> & <span className='smallFontColor' >Privacy Policy</span> of Naukri.com</p>
                <button>Register Now</button>
                <div style={{ color: '#8292b4' ,textAlign:'right' }} className='smallFont' ><span className='smallFontColor' >About Us</span> | <span className='smallFontColor' >Contact Us</span> | <span className='smallFontColor' >FAQs</span> | <span className='smallFontColor' >Terms and Conditions</span> | <span className='smallFontColor' >Report a Problem</span> | <span className='smallFontColor' >Privacy Policy</span></div>
                <p className='smallFont' style={{textAlign:'center'}} >All rights reserved &#169; 2022 Info Edge India Ltd.</p>
                <div className='formSideBox' >
                    <p>OR</p>
                    <h3>Continue with</h3>
                    <button> <img width='20px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" /> Google</button>
                </div>
            </div>
        </div>
    )
}
