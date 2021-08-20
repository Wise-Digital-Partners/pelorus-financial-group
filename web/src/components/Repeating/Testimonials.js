import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Background from "../Background/Background";
import Slider from "../Slider/SliderStandard";
import ButtonWithUnderline from "../Button/ButtonWithUnderline";

const StyledSlider = styled.div`
  /* .slick-prev,
  .slick-next {
    ${tw`h-12 w-12 bg-primary-400 border border-solid border-gray-800`}
    i {
      ${tw`text-2xl text-gray-900`}
    }
    &:hover {
      ${tw`bg-primary-400`}
    }
  } */
  /* .slick-prev {
    ${tw``}
  }
  .slick-next {
    ${tw``}
  } */
  .slick-dots {
    ${tw`relative flex! items-center justify-center space-x-3 mt-10 mb-8`}
    li {
      ${tw`h-2.5 w-2.5 rounded-full bg-primary-400 bg-opacity-40 mr-0 transition-all duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-opacity-100`}
      }
    }
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      facebook: file(
        relativePath: { eq: "repeating/testimonials/facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 81)
        }
      }
      backgroundDesktop: file(
        relativePath: { eq: "repeating/testimonials/Testimonial - desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/testimonials/Testimonial - mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
      name: "Person’s Name",
      company: "Company Name",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis",
      name: "Person’s Name",
      company: "Company Name",
    },
  ];

  // const HeadingTag = headingLevel || "h2";

  return (
    <Background
      backgroundImages={data.backgroundDesktop.childImageSharp.gatsbyImageData}
      padding="pt-24 md:pt-28 pb-24 md:pb-20"
      className={`${className || "mb-24 md:mb-32"}`}
    >
      {/* <header className="md:mb-10 relative">
        <HeadingTag>What Our Patients Say</HeadingTag>
      </header> */}

      <StyledSlider className="relative">
        <Slider>
          {testimonials.map((testimonial, i) => {
            return (
              <div key={i}>
                <blockquote className="md:max-w-[800px] mx-auto text-center md:w-3/4">
                  <q className="text-xl text-primary-800 before:hidden after:hidden">
                    {testimonial.quote}
                  </q>
                  <footer className="mt-10 mx-auto">
                    <div>
                      <cite className="not-italic">
                        <div className="text-sm md:text-base text-gray-900 uppercase tracking-wide mb-2">
                          <span className="font-semibold">
                            {testimonial.name} /
                          </span>{" "}
                          <span>{testimonial.company}</span>
                        </div>
                        {/* <GatsbyImage image={testimonial.platform} /> */}
                      </cite>
                    </div>
                  </footer>
                </blockquote>
              </div>
            );
          })}
        </Slider>
      </StyledSlider>

      <div className="text-center">
        <ButtonWithUnderline href="/reviews/" text="View All Reviews" />
      </div>
    </Background>
  );
};

export default Testimonial;
