import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const searchSliderData = [
    "Data Engineer Jobs",
    "Game  Developer Jobs",
    "DevOps Manager Jobs",
    "Detabase Administraor",
    "Android App Developer Jobs",
    "Back End Developer",
    "DevOps Engineer Jobs",
    "Front End Developer Jobs",
    "Qa Engineer / Software test..",
    "SalesForce Developer Jobs",
    "Automation Tester Jobs",
    "ETL Developer Jobs",
    "Engineering Manager Jobs"
]

export default function SearchPageSlider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='searchsloderOuter' >
            <div className='TopcompanieshiringnowSliderContainer' id='SearchSlider' >
                <Slider {...settings}>
                    {
                        searchSliderData.map((ele) =>
                            <div key={ele} className="searchCard" > <p>{ele}</p> </div>)
                    }
                </Slider>
            </div>
        </div>

    )
}
