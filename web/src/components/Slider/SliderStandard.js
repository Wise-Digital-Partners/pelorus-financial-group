import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  /* .slick-dots {
      li,
      button {
         ${tw`w-2 h-2`}
      }
      li {
         ${tw`mx-2`}
      }
   } */
`;

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center !w-10 !h-10 !border !border-solid !border-primary-400 hover:!bg-primary-100/30 rounded-full  transition-colors duration-300 ease-linear slick-prev"
        aria-label="Previous Slide"
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.38721 17L1.38721 9L9.38721 1" fill="#ED3030" />
          <path
            d="M9.38721 17L1.38721 9L9.38721 1L9.38721 17Z"
            stroke="#ED3030"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center !w-10 !h-10 !border !border-solid !border-primary-400 hover:!bg-primary-100/30 rounded-full  transition-colors duration-300 ease-linear slick-next"
        aria-label="Next Slide"
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.38721 1L9.38721 9L1.38721 17" fill="#ED3030" />
          <path
            d="M1.38721 1L9.38721 9L1.38721 17V1Z"
            stroke="#ED3030"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  }

  const sliderSettings = {
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
