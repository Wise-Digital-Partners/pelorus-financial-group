import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
// import tw from "twin.macro";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 70)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 86)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110)
        }
      }
      headshot: file(relativePath: { eq: "reviews/user.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "Irv Urken",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been using the services of Pelorus Financial for several years and have found their services to be wonderful.  They come up with great ideas  and keep me abreast of new products.   Their follow-up is terrific and I really enjoy the relationship with Brandon and Chandler. I can say with certainty that they have my back",
    },
    {
      name: "Laura Murphy",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been working with Brandon and his team at Pelorus for 5 years and love the services they provide! They are always quick to respond and collaborative when it comes to finding solutions and products for our clientele! 10/10 would recommend",
    },
    {
      name: "Margarita Franco",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I've been working with Brandon for years now and he is one of the most professional and responsive people I know. He is our go to whenever we are looking to place business outside of our own firm. He will not disappoint you.",
    },
    {
      name: "Kelly Crenshaw",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GhatCAW8meYGikCjbSsYDWHaexEGFj1Vlp7r7HK2Q=w60-h60-p-rp-mo-br100",
      quote:
        "Our agency has worked with Brandon and his team for years and the level of service provided to us is top notch. Brandon is responsive, extremely knowledgeable and understands the insurance industry better than anyone I know. When I have a problem or just need a second look at case, I trust and seek Brandon's thoughts and comments.",
    },
    {
      name: "Rachael Standaert",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Brandon and Chandler are absolutely the best in the business. I can always count on them to respond quickly and with accurate information. They are friendly, communicative and go above and beyond to make sure that we have everything we need to help our clients.",
    },
    {
      name: "Kayla Childers",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Gj81PkBXPoLK-GGRJ-Tg63qnS1ijVFggCX-H76-RA=w60-h60-p-rp-mo-br100",
      quote:
        "Brandon and Chandler are absolutely fantastic. They are always a pleasure to work with. They are quick to respond and as helpful as they come! I always enjoy our interactions.",
    },
    {
      name: "Kristi Chun",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I've worked with Pelorus for several years. They have always provided exceptional service. Always professional, they truly care about their partner agents and their clients.",
    },
    {
      name: "Warren Duthie",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GgPvKvT8zEY7c1ApN4Pu4spLGgYEirpXKZx3VcZ-b8=w60-h60-p-rp-mo-br100",
      quote:
        "We’ve been working with Brandon and his team for 15 years now. No one has more integrity. When working with Brandon and his team you will quickly learn why they have become such a huge success. Their service is unbelievable and we will never use another firm. We are with the Pelorus Financial Group for LIFE!",
    },
    {
      name: "Laura Leavitt",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Ghiw29q5-g0_hVwCSNU03dnm42XnHCsOehxelKW=w60-h60-p-rp-mo-br100",
      quote:
        "I can always count a quick response from everyone at Pelorus and I have absolute trust in this agency.  The entire team is personable, professional and an absolute pleasure to work with.",
    },
    {
      name: "Jeremy Heasell",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GggNgLJp94MT2kb8zuEmbQ6BIblTMTo0w_Coa766A=w60-h60-p-rp-mo-br100",
      quote:
        "The team at Pelorus Financial is a joy to work with. I am with a mutual company; we use Pelorus for all outside business. I highly recommend.",
    },
    {
      name: "Matt Johnson",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Gg6ojqA3_9qHwR7JWmOfsnWCzN6wym0X7Sg3lWf-g=w60-h60-p-rp-mo-br100",
      quote:
        "Love working with the Pelorus team! Great people who do great work for advisors and clients!",
    },
    {
      name: "Melina Gomez",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Gitwq5WzDbV_mQ4P8F_lTuFnM-nvtNl0MOqt00mopw=w60-h60-p-rp-mo-br100",
      quote:
        "Our office has worked with Pelorus for several years now and have nothing but great things to say about them. They are professional and get back to us the same day. They always try and find the best products available for all clients and work with us on the most difficult situations.",
    },
    {
      name: "Mike O'Brien",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I have been in the insurance business for 37 years and worked with many brokers. Brandon is by far the most knowledgeable, helpful and responsive broker I have ever worked with.",
    },
    {
      name: "Andrew Rubin",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote: "Best insurance Broker Ive ever worked with!",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-solid border-gray-300 rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-gray-900 font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
