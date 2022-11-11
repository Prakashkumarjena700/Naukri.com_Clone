import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './HomeSlider.css'
import { TopcompanieshiringnowData } from './HomeCopmData'
import {ChevronRightIcon} from '@chakra-ui/icons'

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
                        <p>{ele.name} <ChevronRightIcon/> </p>
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