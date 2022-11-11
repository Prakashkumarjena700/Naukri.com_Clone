import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './HomeSlider.css'
import { TopcompanieshiringnowData, FeaturedcompaniesactivelyhiringData, HalfSliderData } from './HomeCopmData'
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
