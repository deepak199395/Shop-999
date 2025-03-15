import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import carosel1 from "../../Accests/c1.png";
import carosel2 from "../../Accests/c2.png";
import carosel3 from "../../Accests/c3.png";
import carosel4 from "../../Accests/c4.png";
import carosel5 from "../../Accests/c5.png";

const Carousels = () => {
  const images = [carosel1, carosel2, carosel3, carosel4, carosel5];

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
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;
