import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AreasWeServe = ({ className, headingLevel, heading, subtext }) => {
  const data = useStaticQuery(graphql`
    {
      indio: file(
        relativePath: {
          eq: "repeating/locations/Pelorus Financial Group of the Desert Indio.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      laQuinta: file(
        relativePath: { eq: "repeating/locations/La Quinta Kidney Center.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      eisenhower: file(
        relativePath: {
          eq: "repeating/locations/Pelorus Financial Group at Eisenhower Medical Center.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      coachella: file(
        relativePath: {
          eq: "repeating/locations/Coachella Pelorus Financial Group.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      indioNephrology: file(
        relativePath: {
          eq: "repeating/locations/Coachella Valley Nephrology Indio.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      ranchoMirage: file(
        relativePath: {
          eq: "repeating/locations/Coachella Valley Nephrology La Quinta.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
    }
  `);

  const content = {
    dialysisClinics: [
      {
        image: data.indio.childImageSharp.gatsbyImageData,
        heading: "Pelorus Financial Group of the Desert Indio",
        link: "/indio-kidney-institute",
      },
      {
        image: data.laQuinta.childImageSharp.gatsbyImageData,
        heading: "La Quinta Kidney Center",
        link: "/la-quinta-kidney-center",
      },
      {
        image: data.eisenhower.childImageSharp.gatsbyImageData,
        heading: "Pelorus Financial Group at Eisenhower Medical Center",
        link: "/rancho-mirage-kidney-institute",
      },
      {
        image: data.coachella.childImageSharp.gatsbyImageData,
        heading: "Coachella Pelorus Financial Group",
        link: "/coachella-kidney-institute",
      },
    ],
    nephrologyOffices: [
      {
        image: data.indioNephrology.childImageSharp.gatsbyImageData,
        heading: "Coachella Valley Nephrology Indio",
        link: "/indio-coachella-valley-nephrology",
      },
      {
        image: data.ranchoMirage.childImageSharp.gatsbyImageData,
        heading: "Coachella Valley Nephrology La Quinta",
        link: "/rancho-mirage-coachella-valley-nephrology",
      },
    ],
  };

  const HeadingTag = headingLevel || "h2";

  const StyledTabs = styled.div`
    .react-tabs {
      ${tw`flex justify-center flex-wrap`}
    }
    .react-tabs__tab-list {
      ${tw`hidden md:flex space-x-10 relative mb-6 md:mb-10 border-none after:content after:w-full after:h-px after:bg-black after:bg-opacity-20 after:absolute after:bottom-0 after:left-0`}
    }
    .react-tabs__tab {
      ${tw`font-heading text-gray-900 text-opacity-40 font-semibold border-none pt-0 px-0 pb-3 transition-colors duration-300 ease-linear after:content after:w-0 after:h-2 after:bg-primary-800 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-linear`}
    }
    .react-tabs__tab--selected {
      ${tw`text-opacity-100 after:w-full bg-transparent`}
    }
    .react-tabs__tab-panel:not(.react-tabs__tab-panel--selected) {
      ${tw`block md:hidden`}
    }
  `;

  return (
    <section className={`${className || "mb-18 md:mb-32"}`}>
      <div className="container">
        <header
          className={`${
            subtext ? "mb-10 md:mb-16" : "mb-8 md:mb-12"
          } md:text-center max-w-2xl mx-auto`}
        >
          <HeadingTag>{heading || "Where We’re Located"}</HeadingTag>
          {subtext || <p>{subtext}</p>}
        </header>

        <StyledTabs>
          <Tabs forceRenderTabPanel={true}>
            <TabList>
              <Tab>Dialysis Clinics</Tab>
              <Tab>Nephrology Offices</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2.5 md:gap-x-6">
                {content.dialysisClinics.map((content, i) => {
                  return (
                    <AniLink
                      fade
                      to={content.link}
                      key={i}
                      className="group relative"
                    >
                      <div className="rounded-xl overflow-hidden mb-3">
                        <GatsbyImage
                          image={content.image}
                          alt={content.heading}
                          className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                        />
                        <div className="bg-[#A68098] rounded border border-white text-center text-white text-xs font-semibold px-2 py-1 absolute top-4 right-4">
                          Dialysis
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-heading font-semibold text-gray-900 mb-0">
                        {content.heading}
                      </p>
                    </AniLink>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2.5 md:gap-x-6">
                {content.nephrologyOffices.map((content, i) => {
                  return (
                    <AniLink
                      fade
                      to={content.link}
                      key={i}
                      className={`group relative ${
                        i === 0 && "lg:col-start-2"
                      }`}
                    >
                      <div className="rounded-xl overflow-hidden mb-3">
                        <GatsbyImage
                          image={content.image}
                          alt={content.heading}
                          className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                        />
                        <div className="bg-[#F2A679] rounded border border-white text-center text-white text-xs font-semibold px-2 py-1 absolute top-4 right-4">
                          Nephrology
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-heading font-semibold text-gray-900 mb-0">
                        {content.heading}
                      </p>
                    </AniLink>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </StyledTabs>
      </div>
    </section>
  );
};

export default AreasWeServe;
