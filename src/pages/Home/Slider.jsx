import { useEffect } from "react";
import "./_Slider.scss";
import { images } from "./images-links";
import SingleSlide from "./SingleSlide";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let lastIndex = images.length - 1;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
  };
  const prevSlide = () => {
    setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
  };

  let timer = 2000;
  let interval;
  let autoSliderScroll = true;

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  function autoSlide() {
    interval = setInterval(nextSlide, timer);
  }
  useEffect(() => {
    if (autoSliderScroll) {
      autoSlide();
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-items">
        <div className="text">
          <h2>If you’re looking to buy something special, shop here.</h2>
          <p>
            When life gives you lemons, make lemonade. When life gives you
            shopping carts, push them back to the store.
          </p>
          <a href="#products-grid" className="btn btn-primary submit-btn">
            Shop Now
          </a>
        </div>
        <div className="slider">
          {images ? (
            images.map((x, index) => {
              return (
                <SingleSlide
                  image={x}
                  key={x.id}
                  currentClass={index === currentIndex ? "img current" : "img"}
                />
              );
            })
          ) : (
            <h2>No images to show</h2>
          )}
        </div>
      </div>
      <div className="arrows">
        <button id="left" onClick={() => prevSlide()}>
          <i>
            <AiOutlineDoubleLeft />
          </i>
        </button>

        <button
          id="right"
          onClick={() => {
            nextSlide();
          }}
        >
          <i>
            <AiOutlineDoubleRight />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
