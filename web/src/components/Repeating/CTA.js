import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import Background from "../Background/Background";

const CTA = ({ heading, headingLevel, subtext, className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/CTA/CTA Desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/CTA/CTA Mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  const backgroundImages = [
    getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Background backgroundImages={backgroundImages} padding="py-20 md:py-36">
      <header className="text-center md:text-left">
        <HeadingTag className="text-mobile-6xl md:text-6xl text-white md:mb-6">
          {heading || ["Explore The Possibilities"]}
        </HeadingTag>

        <p className="text-base md:text-xl text-white">
          {subtext ||
            "Get a quote or speak with one of our team members to discuss your needs."}
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-4">
        <ButtonGhost
          modal="modal-contact"
          altStyle={true}
          text="Contact Us"
          className="w-full md:w-auto"
        />
        <ButtonSolid
          href="/get-a-quote/"
          text="Run a Quote"
          className="w-full md:w-auto"
        />
      </div>
    </Background>
  );
};

export default CTA;
