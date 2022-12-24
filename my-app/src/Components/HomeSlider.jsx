import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './HomeSlider.css'
import { TopcompanieshiringnowData, FeaturedcompaniesactivelyhiringData, HalfSliderData, Sponsored, HomelastSliderData, MyArr } from './HomeCopmData'
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { createRoutesFromChildren } from "react-router-dom";

export const Topcompanieshiring = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='TopcompanieshiringnowSliderContainer' >
            <Slider {...settings}>
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

// export const TopcompanieshiringnowSlider = () => {
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }
//     return (
//         <div id="TopcompanieshiringnowSliderContainer" className='TopcompanieshiringnowSliderContainer' >
//             <Slider {...settings} >
//                 {
//                     TopcompanieshiringnowData.map((ele) => <div className='Card' >
//                         <p>{ele.name} <ChevronRightIcon /> </p>
//                         <p>{ele.active} are actively hiring</p>
//                         <div className="picContainer" >
//                             {
//                                 ele.pics.map((ele) => <div  >
//                                     <img src={ele} alt="🗼" />
//                                 </div>)
//                             }
//                         </div>
//                     </div>)
//                 }
//             </Slider>
//         </div>
//     )
// }

export const Featuredcompanie = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="TopcompanieshiringnowSliderContainer" >
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

// export const FeaturedcompanieSlider = () => {
//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 3

//     };
//     return (
//         <div className='TopcompanieshiringnowSliderContainer' >
//             <Slider {...settings} >
//                 {
//                     FeaturedcompaniesactivelyhiringData.map((ele) => <div className="FeaturedcompanieSliderCard" >
//                         <img src={ele.pic} alt={ele.name} />
//                         <div><h2>{ele.name}</h2>
//                             <div><StarIcon h='3' w='3' color='gold' /><span>  {ele.rating}</span><span>| {ele.reviews} reviews</span></div>
//                         </div>
//                         <p>{ele.dis}</p>
//                         <button>View jobs</button>
//                     </div>)
//                 }
//             </Slider>
//         </div>
//     )
// }
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
// export const SponsoredSlider = () => {
//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div id="sponsoredslider" className='TopcompanieshiringnowSliderContainer' >
//             <Slider {...settings} >
//                 {
//                     Sponsored.map((ele) => <div className="sponsordSliderCard" >
//                         {
//                             ele.arr.map((ele) =>
//                                 <div>
//                                     <img src={ele.pic} alt={ele.name} />
//                                     <h1>{ele.name}<ChevronRightIcon color='#a5b2ca' /></h1>
//                                     <div><StarIcon h='3' w='3' color='gold' /> <p>{ele.rating}</p><p>| {ele.reviews} reviews</p> </div>
//                                     <p className="btns" >Software Product</p>
//                                     <br />
//                                     <span className="btns" >Foreign MNC</span><span className="btns" >Product</span>
//                                     <p style={{ color: 'white' }} >-</p>
//                                 </div>
//                             )
//                         }
//                     </div>
//                     )
//                 }
//             </Slider>
//         </div>
//     )
// }

export const Sponsoredupdatedslider = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
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
    };

    // console.log(Sponsoredupdated)

    return (
        <div className=" TopcompanieshiringnowSliderContainer" >
            <Slider {...settings}>
                {
                    MyArr.map((el) => <div>
                        {
                            el.arr.map((ele) => <div className="sponsoredupdatedCard" >
                                <img src={ele.pic} alt={ele.name} />
                                <h1>{ele.name}<ChevronRightIcon color='#a5b2ca' /></h1>
                                <div className="ratings" ><StarIcon h='3' w='3' color='gold' /> <p>{ele.rating}</p><p>| {ele.reviews} reviews</p> </div>
                                <div className="btns" >
                                    <p>Foreign MNC</p>
                                    <p>Product</p>
                                    <p>Software Product</p>
                                </div>
                                <p style={{ color: 'white' }} >-</p>
                            </div>)
                        }
                    </div>)
                }
            </Slider>
        </div>
    )
}

export const HomelastSliderSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
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
