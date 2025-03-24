import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import carosel6 from "../../Accests/kkr.png";
import carosel7 from "../../Accests/LSJ.png"
import carosel9 from "../../Accests/ipl2025.png"
import carosel10 from "../../Accests/MI.png"

const Carousels = () => {
  const images = [carosel6,carosel7,carosel9,carosel10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div style={{ width: "100%", margin: "auto", paddingTop: "20px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "550px", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;
