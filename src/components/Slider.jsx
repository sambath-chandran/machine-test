import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import * as Lu from "react-icons/lu";

function SliderComp() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://placehold.co/600?text=countries1",
    "https://placehold.co/600?text=countries2",
    "https://placehold.co/600?text=countries3",
    "https://placehold.co/600?text=countries4",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <section className="cliser_comp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 position-relative order-2 order-lg-1 order-md-2 order-sm-2 slider-col">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((img, i) => (
                <div key={i} className="slider__">
                  <img src={img} alt={`slide ${i}`} className="slider_img" />
                </div>
              ))}
            </Slider>

            <div className="slider-controls">
              <button
                className="slider-btn btn-prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <Lu.LuArrowLeft />
              </button>

              <div className="dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={i === currentSlide ? "active" : ""}
                    onClick={() => sliderRef.current.slickGoTo(i)}
                  />
                ))}
              </div>

              <button
                className="slider-btn btn-next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <Lu.LuArrowRight />
              </button>
            </div>
          </div>
          <br />
          <div className="col-lg-4 col-md-12 col-sm-12 order-lg-2 order-1">
            <div className="vertical_img">
              <img
                src="https://placehold.co/600?text=countries_poster"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderComp;
