import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './SearchPage.css'
import { SearchIcon, ChevronDownIcon, StarIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerHeader, Box, Slider, SliderMark, DrawerOverlay, SliderTrack, SliderFilledTrack, SliderThumb, DrawerContent, useDisclosure, Button, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import axios from 'axios'
import { MdFilterList } from "react-icons/md";
import { BiShoppingBag, BiRupee } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineFileAdd, AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Footer from '../Components/Footer'


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
    // const[loading, setLoading]=false

    const searchFunc = () => {
        console.log(text)
    }

    useEffect(() => {
        getData(`https://mr-mishra.herokuapp.com/jobDataNaukri/?q=${text}`)
            .then((res) => setArr(res.data))
    }, [text])

    return (
        <div>
            <Navbar />
            <h1 className='speacer' >-</h1>
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
            <div className='searchPage' >
                <div>
                    <p style={{ display: 'flex', gap: '10px', fontWeight: '600', margin: '15px 0px' }} ><MdFilterList /> All filters </p>
                    <details>
                        <summary>Work mode <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" />Work from office(101726) </p>
                        <p><input type="checkbox" />Hybrid(3269) </p>
                        <p><input type="checkbox" />Permanent Remote / WFH(2128) </p>
                        <p><input type="checkbox" />Temp. WFH due to covid(1777)</p>
                    </details>
                    <details>
                        <summary>Experience <ChevronDownIcon /> </summary>
                        <Box pt={6} pb={2}>
                            <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                <SliderMark value={0} {...labelStyles}>
                                    0 Yrs
                                </SliderMark>
                                <SliderMark value={100} {...labelStyles}>
                                    Any
                                </SliderMark>
                                <SliderMark
                                    value={sliderValue}
                                    textAlign='center'
                                    bg='blue.500'
                                    color='white'
                                    mt='-10'
                                    ml='-5'
                                    w='12'
                                >
                                    {sliderValue}
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </Box>
                    </details>
                    <details>
                        <summary>Department <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" />Engineering - Software & QA(99452) </p>
                        <p><input type="checkbox" />UX, Design & Architecture(2430) </p>
                        <p><input type="checkbox" />IT & Information Security(1957)</p>
                        <p><input type="checkbox" />Other(1159)</p>
                        <p id='colb' >+30 More </p>
                    </details>
                    <details>
                        <summary>Location <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> Bangalore/Bengaluru(31066) </p>
                        <p><input type="checkbox" /> Delhi / NCR(17780)</p>
                        <p><input type="checkbox" /> Hyderabad/Secunderabad(14153)</p>
                        <p><input type="checkbox" />Pune(13550) </p>
                        <p id='colb' >+22 More </p>
                    </details>
                    <details>
                        <summary>Salary <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> 0-3 Lakhs(13118) </p>
                        <p><input type="checkbox" /> 3-6 Lakhs(56584) </p>
                        <p><input type="checkbox" /> 6-10 Lakhs(76237) </p>
                        <p><input type="checkbox" /> 10-15 Lakhs(44823) </p>
                        <p id='colb' >+6 More </p>
                    </details>
                    <details>
                        <summary>Company type <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> Foreign MNC(14038) </p>
                        <p><input type="checkbox" /> Corporate(8296)</p>
                        <p><input type="checkbox" /> Indian MNC(3982) </p>
                        <p><input type="checkbox" /> Startup(1288) </p>
                        <p id='colb' >+3 More </p>
                    </details>
                    <details>
                        <summary>Role Category <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> Software Development(95021) </p>
                        <p><input type="checkbox" />DevOps(2091) </p>
                        <p><input type="checkbox" />Other Design(2011) </p>
                        <p><input type="checkbox" /> Quality Assurance and Testing(1874) </p>
                        <p id='colb' >+6 More</p>
                    </details>
                    <details>
                        <summary>Education <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> Any Postgraduate(48765) </p>
                        <p><input type="checkbox" />Post Graduation Not Required(24384) </p>
                        <p><input type="checkbox" />Any Graduate(67330) </p>
                        <p><input type="checkbox" /> B.Tech/B.E.(41194) </p>
                        <p id='colb' > + 21 More </p>
                    </details>
                    <details>
                        <summary>Posted by <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" /> Company Jobs(97085) </p>
                        <p ><input type="checkbox" /> Consultant Jobs(11812) </p>
                    </details>
                    <details>
                        <summary>Industries <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" />IT Services & Consulting(62777) </p>
                        <p><input type="checkbox" />Recruitment / Staffing(13520) </p>
                        <p><input type="checkbox" />Software Product(4470) </p>
                        <p><input type="checkbox" />Management Consulting(3593) </p>
                        <p id='colb' >+ 21 More </p>
                    </details>
                    <details>
                        <summary>Top Companies <ChevronDownIcon /> </summary>
                        <p><input type="checkbox" />Accenture(2274) </p>
                        <p><input type="checkbox" />IBM India(665) </p>
                        <p><input type="checkbox" />Infosys Technologies(392) </p>
                        <p><input type="checkbox" /> CGI Group Inc (269)</p>
                        <p id='colb' >+ 25 More </p>
                    </details>

                </div>
                <div >
                    {
                        arr.map((ele) =>
                            <div className='resultContainer' >
                                <img src={ele.img} alt="" />
                                <h2>{ele.name}</h2>
                                <p style={{ fontSize: '15px' }} >{ele.comp} {ele.rating} &nbsp;<StarIcon color='gold' h='3' />&nbsp;<span style={{ color: '#5097e5' }} >({ele.reviews} Reviews)</span></p>
                                <div>
                                    <p> <BiShoppingBag /> {ele.exp}</p>
                                    <p> <BiRupee /> Not disclosed</p>
                                    <p> <GrLocation /> {ele.location}</p>
                                </div>
                                <p><AiOutlineFileAdd /> {ele.dis}</p>
                                <div style={{ margin: '10px 0px' }} >
                                    {
                                        ele.arr.map((item) => <p> <BsDot /> {item}</p>)
                                    }
                                </div>
                                <div style={{ justifyContent: 'space-between' }} >
                                    <p style={{ fontSize: '11px', backgroundColor: '#eaf1f5' }} > <RepeatClockIcon />&nbsp; 3 DAYS AGO</p>
                                    <p><AiOutlineStar /> Save</p>
                                </div>
                            </div>)
                    }
                </div>
                <div>
                    <div>
                        <h1>See 143 jobs in Featured <br /> Companies</h1>
                        <div>
                            <img src="https://img.naukimg.com/fc_images/v2/12386.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/4113192.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/196760.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/13512.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/5111614.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/3211.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/3122282.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/5271592.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/3426010.gif" alt="" />
                            <img src="https://img.naukimg.com/fc_images/v2/45244.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
