import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../../assets/Luxury Room_page-0001.jpg";
import slide2 from "../../assets/slide1.jpg";
import slide3 from "../../assets/aboutus-bottom.jpg";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={slide1}
          alt="Slide 1"
          className="w-full h-auto"
        />
      </div>
      <div>
        <img
          src={slide2}
          alt="Slide 2"
          className="w-full h-auto"
        />
      </div>
      <div>
        <img
          src={slide3}
          alt="Slide 3"
          className="w-full h-auto"
        />
      </div>
    </Slider>
  );
};

export default ImageCarousel;