import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "../Slider/SliderLogos";
import ButtonWithUnderline from "../Button/ButtonWithUnderline";

const StyledSlider = styled.div`
  /* .slick-dots {
    ${tw`relative flex! items-center justify-center space-x-3 mt-10 mb-8`}
    li {
      ${tw`h-2.5 w-2.5 rounded-full bg-primary-400 bg-opacity-40 mr-0 transition-all duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-opacity-100`}
      }
    }
  } */
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      carrier01: file(relativePath: { eq: "Carriers/carrier 01.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier02: file(relativePath: { eq: "Carriers/carrier 02.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier03: file(relativePath: { eq: "Carriers/carrier 03.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier04: file(relativePath: { eq: "Carriers/carrier 04.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier05: file(relativePath: { eq: "Carriers/carrier 05.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier06: file(relativePath: { eq: "Carriers/carrier 06.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier07: file(relativePath: { eq: "Carriers/carrier 07.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier08: file(relativePath: { eq: "Carriers/carrier 08.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier09: file(relativePath: { eq: "Carriers/carrier 09.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier10: file(relativePath: { eq: "Carriers/carrier 10.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier11: file(relativePath: { eq: "Carriers/carrier 11.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier12: file(relativePath: { eq: "Carriers/carrier 12.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier13: file(relativePath: { eq: "Carriers/carrier 13.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier14: file(relativePath: { eq: "Carriers/carrier 14.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier15: file(relativePath: { eq: "Carriers/carrier 15.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier16: file(relativePath: { eq: "Carriers/carrier 16.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier17: file(relativePath: { eq: "Carriers/carrier 17.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier18: file(relativePath: { eq: "Carriers/carrier 18.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier19: file(relativePath: { eq: "Carriers/carrier 19.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier20: file(relativePath: { eq: "Carriers/carrier 20.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier21: file(relativePath: { eq: "Carriers/carrier 21.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier22: file(relativePath: { eq: "Carriers/carrier 22.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier23: file(relativePath: { eq: "Carriers/carrier 23.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier24: file(relativePath: { eq: "Carriers/carrier 24.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier25: file(relativePath: { eq: "Carriers/carrier 25.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
      carrier26: file(relativePath: { eq: "Carriers/carrier 26.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 193)
        }
      }
    }
  `);

  const carriers = [
    {
      logo: data.carrier01.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier02.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier03.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier04.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier05.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier06.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier07.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier08.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier09.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier10.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier11.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier12.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier13.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier14.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier15.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier16.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier17.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier18.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier19.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier20.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier21.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier22.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier23.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier24.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier25.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier26.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-24 md:mb-32 overflow-hidden"}`}>
      <div className="container">
        <header className="md:mb-0 text-center">
          <HeadingTag>Premium Carrier Providers</HeadingTag>
        </header>

        <StyledSlider className="relative">
          <Slider>
            {carriers.map((carrier, i) => {
              return (
                <div key={i}>
                  <GatsbyImage image={carrier.logo} />
                </div>
              );
            })}
          </Slider>
        </StyledSlider>

        <div className="text-center">
          <ButtonWithUnderline
            href="/insurance-carriers/"
            text="View All Carrier Partners "
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
