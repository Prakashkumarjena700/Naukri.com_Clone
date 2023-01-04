import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './SearchPage.css'
import { SearchIcon, ChevronDownIcon, StarIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerHeader, Box, Slider, SliderMark, DrawerOverlay, SliderTrack, SliderFilledTrack, SliderThumb, DrawerContent, useDisclosure, Button, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import axios from 'axios'
import SearchPageSlider from '../Components/SearchPageSlider'
import { MdFilterList } from "react-icons/md";
import { BiShoppingBag, BiRupee } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillFileText, AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Footer from '../Components/Footer'
import { BsBag, BsBookmark } from "react-icons/bs";
import { SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import Pagination from '../Components/Pagination'
import { Link } from 'react-router-dom'


const getData = (url) => {
    return axios.get(url)
}

export default function SearchPage() {
    const [sliderValue, setSliderValue] = useState(10)
    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [text, setText] = useState('')
    const [arr, setArr] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setpage] = useState(1)

    const searchFunc = () => {
        console.log(text)
    }

    useEffect(() => {
        setLoading(true)
        getData(`https://prakash-vercel-database.vercel.app/naukridata/?q=${text}&_page=${page}&_limit=5`)
            .then((res) => setArr(res.data))
            .then(() => setLoading(false))
    }, [text, page])

    console.log(page)

    return (
        <div>
            <Navbar />
            <div className='searchBtn' onClick={onOpen}  >
                <div onClick={onOpen} >Search</div>
                <SearchIcon bg='#457eff' h='7' style={{ borderRadius: '15px' }} w='7' p='1' color='white' ref={btnRef} />
                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}

                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader> <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" /></DrawerHeader>

                        <DrawerBody>

                            <div style={{ top: '6px', marginBottom: '20px' }} className='searchDiv' >
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<SearchIcon color='gray.300' />
                                        }
                                    />
                                    <Input type='tel' placeholder='Enter skills / designations / companies'
                                        focusBorderColor='white'
                                        onChange={(e) => setText(e.target.value)}
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
                                <Button onClick={onClose}><p onClick={searchFunc} >Search</p></Button>
                            </div>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </div>
            <SearchPageSlider />
            <div className='searchMainContainer' >
                <div className='allfilters'>
                    <p>All Filters</p>
                    <div>
                        <p>Department</p>
                        <label ><input type="checkbox" onChange={() => setText('it')} />IT & Information</label>
                        <label ><input type="checkbox" onChange={() => setText('sale')} />Sales & Business</label>
                        <label ><input type="checkbox" onChange={() => setText('banking')} />Banking</label>
                    </div>
                    <div>
                        <p>Location</p>
                        <label ><input type="checkbox" onChange={() => setText('Bangalore')} />Bangalore</label>
                        <label ><input type="checkbox" onChange={() => setText('bhubaneswar')} />Bhubaneswar</label>
                        <label ><input type="checkbox" onChange={() => setText('delhi')} />Delhi / NCR</label>
                        <label ><input type="checkbox" onChange={() => setText('pune')} />Pune</label>
                        <label ><input type="checkbox" onChange={() => setText('hyderabad')} />Hyderabad</label>
                    </div>
                    <div>
                        <p>Role Category</p>
                        <label ><input type="checkbox" onChange={() => setText('Software Development')} />Software Development</label>
                        <label ><input type="checkbox" onChange={() => setText('sale')} />Retail & B2C Sales</label>
                        <label ><input type="checkbox" onChange={() => setText('it')} />It Support</label>
                    </div>
                    <div>
                        <p>Industries</p>
                        <label ><input type="checkbox" onChange={() => setText('it services')} />IT Services</label>
                        <label ><input type="checkbox" onChange={() => setText('banking')} />Banking</label>
                        <label ><input type="checkbox" onChange={() => setText('bpo')} />BPO</label>
                    </div>
                    <div>
                        <p>Top Companies</p>
                        <label ><input type="checkbox" onChange={() => setText('Accenture')} />Accenture</label>
                        <label ><input type="checkbox" onChange={() => setText('Infosys')} />Infosys Technologies</label>
                        <label ><input type="checkbox" onChange={() => setText('IBM')} />IBM India</label>
                        <label ><input type="checkbox" onChange={() => setText('tcs')} />TCS</label>
                    </div>
                </div>
                <div className='allresult'>
                    {loading ?
                        <div>
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                            <SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='4' />
                            <br />
                        </div> :
                        arr.map((ele) =>
                            <div className='resultCard' >
                                <Link to={`/searchpage/${ele.id}`} className='resultCard' style={{ margin: '0px', padding: '0px' }} >
                                    <div>
                                        <div>
                                            <p>{ele.name}</p>
                                            <p>{ele.comp} <AiFillStar color='#ffab00' /><span color='#9ea6bb'>{ele.rating}</span></p>
                                        </div>
                                        <div>
                                            <img src={ele.logo} alt="" />
                                        </div>
                                    </div>
                                    <p className='experiance' ><BsBag color='#9ea6bb' /> &nbsp; {ele.exp} Yrs &nbsp; | &nbsp;<BiRupee color='#9ea6bb' />&nbsp; Not disclosed | &nbsp;<HiOutlineLocationMarker color='#9ea6bb' />{ele.address.substring(0, 11)}</p>
                                    <p className='discription' ><AiFillFileText color='#9ea6bb' /> {ele.dis}</p>
                                    <div>
                                        <p>Experience</p>
                                        <p><BsDot /> Google Drive</p>
                                        <p><BsDot /> Onsite Support</p>
                                        <p><BsDot /> Networking</p>
                                        <p><BsDot /> communication skills</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '70%' }} >Few Days Ago</p>
                                        <p style={{ color: 'black' }} ><BsBookmark /> Save</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    <Pagination current={page} total={5} onchange={(value) => setpage(value)} />

                </div>
                <div className='ad'>
                    <p>See 13 jobs in Featured Companies</p>
                    <div>
                        <img src="https://img.naukimg.com/fc_images/v2/275401.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/7053.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/93084.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/719011.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/45244.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/30210.gif" alt="" />
                        <img src="https://img.naukimg.com/fc_images/v2/759389.gif" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
