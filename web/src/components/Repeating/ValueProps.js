import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      experiencedTeam: file(
        relativePath: {
          eq: "repeating/value-props/VP 1 -  Experienced Team.svg"
        }
      ) {
        publicURL
      }
      exceptionalService: file(
        relativePath: {
          eq: "repeating/value-props/VP 2 - Exceptional Service.svg"
        }
      ) {
        publicURL
      }
      expertSolutions: file(
        relativePath: {
          eq: "repeating/value-props/VP 3 -  Expert Solutions.svg"
        }
      ) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.exceptionalService.publicURL,
      heading: "Experienced Team",
      text: "You’ll benefit from our team’s extensive knowledge in business and estate planning, and other markets.",
    },
    {
      icon: data.expertSolutions.publicURL,
      heading: "Exceptional Service",
      text: "We’re committed to providing personalized service with a quick turnaround so you can serve your clients well.",
    },
    {
      icon: data.experiencedTeam.publicURL,
      heading: "Expert Solutions",
      text: "Our experienced team brings you underwriting expertise, advanced marketing, and smart estate, and business planning.",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-18 md:mb-32"}`}>
      <div className="container">
        <header className="max-w-2xl mx-auto mb-10 md:mb-20 text-center">
          <HeadingTag>{heading || "Let Pelorus Be Your Guide"}</HeadingTag>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10 text-center">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <div className="mb-2">
                  <img
                    src={content.icon}
                    alt={content.heading}
                    className="mx-auto"
                  />
                </div>
                <h3 className="heading-five mb-2">{content.heading}</h3>
                <p className="mb-0">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
