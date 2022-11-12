import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Footer() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false
  };
  return (
    <div className='footerDiv' >
      <div >
        <div>
          <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
          <p>Connect with us</p>
          <div className='iconImgs' >
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" alt="" />
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" alt="" />
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" alt="" />
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" alt="" />
          </div>
        </div>
        <div>
          <p> About us</p>
          <p>Help center</p>
          <p>Privacy policy</p>
          <p> Careers</p>
          <p>Summons/Notices</p>
          <p>Terms & conditions</p>
          <p> Employer home</p>
          <p>Grievances</p>
          <p>Fraud alert</p>
          <p>Sitemap</p>
          <p>Report issue</p>
          <p> Trust & safety</p>
        </div>
        <div>
          <div id='lastdiv' >
            <h2>Apply on the go</h2>
            <p>Get real-time job updates on our App</p>
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png" alt="" />
            <img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='secondSecond' >
          <div><img src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg" alt="" /></div>
          <div><p>All trademarks are the property of their respective owners <br />
            All rights reserved © 2022 Info Edge (India) Ltd.</p></div>
          <div><p>Our businesses</p></div>
        </div>
        <div className='footerSlider' >
          <Slider {...settings} className='footerSlideBox' >
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/hirist.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png" alt="" />
            </div>
            <div>
              <img src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
