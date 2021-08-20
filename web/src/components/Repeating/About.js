import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonGhost from "../Button/ButtonGhost";

const MeetTheTeam = ({ className, headingLevel, heading, text }) => {
  const data = useStaticQuery(graphql`
    {
      team: file(relativePath: { eq: "repeating/about/about.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-16 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
          <div>
            <GatsbyImage
              image={data.team.childImageSharp.gatsbyImageData}
              width="560"
              className="rounded-4xl"
            />
          </div>
          <div>
            <HeadingTag>
              {heading || "About the Pelorus Financial Groups"}
            </HeadingTag>
            <p>
              {text ||
                "We first opened our doors at the Pelorus Financial Group of the Desert in Indio in 1987. Since then, we've expanded to serve the greater Coachella Valley. We provide friendly, quality care locally and for visitors to the area."}
            </p>
            <ButtonGhost href="/about-us" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
