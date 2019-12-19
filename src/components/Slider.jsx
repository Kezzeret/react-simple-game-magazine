import React from 'react';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider'
    };
    return (
      <Slider {...settings}>
        <div className = 'first'>

        </div>
        <div className = 'second'>

        </div>
        <div className = 'third'>

        </div>

      </Slider>
    );
  }
}
