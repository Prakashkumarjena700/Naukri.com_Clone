import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './HomeSlider.css'
import { TopcompanieshiringnowData, FeaturedcompaniesactivelyhiringData, HalfSliderData, Sponsored, HomelastSliderData } from './HomeCopmData'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'

export const TopcompanieshiringnowSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return (
        <div className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings} >
                {
                    TopcompanieshiringnowData.map((ele) => <div className='Card' >
                        <p>{ele.name} <ChevronRightIcon /> </p>
                        <p>{ele.active} are actively hiring</p>
                        <div className="picContainer" >
                            {
                                ele.pics.map((ele) => <div  >
                                    <img src={ele} alt="🗼" />
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    )
}
export const FeaturedcompanieSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    return (
        <div className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings} >
                {
                    FeaturedcompaniesactivelyhiringData.map((ele) => <div className="FeaturedcompanieSliderCard" >
                        <img src={ele.pic} alt={ele.name} />
                        <div><h2>{ele.name}</h2>
                            <div><StarIcon h='3' w='3' color='gold' /><span>  {ele.rating}</span><span>| {ele.reviews} reviews</span></div>
                        </div>
                        <p>{ele.dis}</p>
                        <button>View jobs</button>
                    </div>)
                }
            </Slider>
        </div>
    )
}
export const HelfSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id="halfSlideContainer" className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings} >
                {
                    HalfSliderData.map((ele) => <div className="halfSliderCard" >
                        {
                            ele.arr.map((ele) =>
                                <div>
                                    <h1>{ele.name}</h1>
                                    <p>{ele.jobs} Jobs <ChevronRightIcon color='#a5b2ca' /></p>
                                </div>
                            )
                        }
                    </div>
                    )
                }
            </Slider>
        </div>
    )
}
export const SponsoredSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings} >
                {
                    Sponsored.map((ele) => <div className="sponsordSliderCard" >
                        {
                            ele.arr.map((ele) =>
                                <div>
                                    <img src={ele.pic} alt={ele.name} />
                                    <h1>{ele.name}<ChevronRightIcon color='#a5b2ca' /></h1>
                                    <div><StarIcon h='3' w='3' color='gold' /> <p>{ele.rating}</p><p>| {ele.reviews} reviews</p> </div>
                                    <p className="btns" >Software Product</p>
                                    <br />
                                    <span className="btns" >Foreign MNC</span><span className="btns" >Product</span>
                                    <p style={{ color: 'white' }} >-</p>
                                </div>
                            )
                        }
                    </div>
                    )
                }
            </Slider>
        </div>
    )
}
export const HomelastSliderSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div id='lastslider' className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings} >
                {
                    HomelastSliderData.map((ele) =>
                        <div className="lastSliderCard" >
                            <span>{ele.sector}</span>
                            <h1>{ele.name}</h1>
                            <p>{ele.dis}</p>
                            <button>{ele.btn1} courses</button>
                            <button>{ele.btn2} providers</button>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}
