import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './HomeSlider.css'
import { TopcompanieshiringnowData } from './HomeCopmData'

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
                        <div >{ele.name}</div>

                    </div>)
                }
            </Slider>
        </div>
    )
}