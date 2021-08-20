import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Background from "../Background/Background";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonWithUnderline from "../Button/ButtonWithUnderline";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      quoteSoftware: file(
        relativePath: { eq: "repeating/toolbox/Toolbox 0 - quote.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
      formsApplications: file(
        relativePath: { eq: "repeating/toolbox/Toolbox 1 - forms and app.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 356)
        }
      }
      underwriting: file(
        relativePath: { eq: "repeating/toolbox/Toolbox 2 - Underwriting.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 356)
        }
      }
      contracting: file(
        relativePath: { eq: "repeating/toolbox/Toolbox 3 - Contracting.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 356)
        }
      }
    }
  `);

  const content = [
    {
      image: data.formsApplications.childImageSharp.gatsbyImageData,
      heading: "Forms & Applications",
      text: "Save time and increase your placement ratio using iPipeline’s iGO e-App for your forms and applications.",
      link: "/forms-applications/",
    },
    {
      image: data.underwriting.childImageSharp.gatsbyImageData,
      heading: "Underwriting",
      text: "Access underwriting information and packages via a secure login.",
      link: "/underwriting/",
    },
    {
      image: data.contracting.childImageSharp.gatsbyImageData,
      heading: "Contracting",
      text: "Complete a contracting request via SureLC, our online contracting solution.",
      link: "/contracting-licensing/",
    },
  ];

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="md:flex md:justify-between md:items-center mb-12 md:mb-16 text-center md:text-left">
          <h2 className="mb-0">The Financial Advisor Toolbox</h2>
          <ButtonWithUnderline
            href="/tools/"
            text="All Tools & Toolbox"
            className="hidden md:inline-flex"
          />
        </header>
        <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-6 lg:gap-x-12 xl:gap-x-18 mb-12 md:mb-0">
          <Background
            backgroundImages={
              data.quoteSoftware.childImageSharp.gatsbyImageData
            }
            className="h-full flex items-end"
            padding="pt-72 md:pt-0 pb-8 px-2 md:px-6 -mx-4 md:mx-0"
          >
            <h3 className="text-white mb-4">Quote Software</h3>
            <ButtonSolid href="/get-a-quote/" text="Run a Quote" />
          </Background>
          <div>
            <div className="grid md:grid-cols-1 gap-y-12 md:gap-y-8">
              {content.map((content, i) => {
                return (
                  <AniLink
                    fade
                    to={content.link}
                    className="group grid md:grid-cols-11 md:gap-x-4 lg:gap-x-8 gap-y-8"
                    key={i}
                  >
                    <div className="overflow-hidden md:col-start-1 md:col-span-4">
                      <GatsbyImage
                        image={content.image}
                        alt={content.heading}
                        className="transform w-full scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                      />
                    </div>
                    <div className="md:col-end-13 md:col-span-8">
                      <h3 className="heading-four mb-2">{content.heading}</h3>
                      <p className="mb-0">{content.text}</p>
                    </div>
                  </AniLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center md:hidden">
          <ButtonWithUnderline href="/tools/" text="All Tools & Toolbox" />
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
