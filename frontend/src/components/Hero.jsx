import { assets } from "../assets/assets";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
  };
  return (
    <>
      <div className="flex flex-col justify-center mt-8 sm:flex-row">
        {/* Hero Left Side
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div> */}
        {/* Hero Right Side */}

        <Slider className="w-full" {...settings}>
          <img
            className="w-1/2 object-cover"
            src="/expanded-image-2.jpg"
            alt=""
          />
          <img
            className="w-1/2 object-cover"
            src="/expanded-image-3.jpg"
            alt=""
          />
          <img
            className="w-1/2 object-cover"
            src="/expanded-image-4.jpg"
            alt=""
          />
          <img
            className="w-1/2 object-cover"
            src="/expanded-image-5.jpg"
            alt=""
          />
          <img
            className="w-1/2 object-cover"
            src="/expanded-image-6.jpg"
            alt=""
          />
          <img
            className="w-1/2 object-cover"
            src="/expanded_image-shoe.jpg"
            alt=""
          />
        </Slider>
      </div>
    </>
  );
};

export default Hero;
