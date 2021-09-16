import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

import hippaFile from "../downloads/Pelorus HIPAA.pdf";

import aFib from "../downloads/medical/A-Fib.pdf";
import alcoholUse from "../downloads/medical/Alcohol Use.pdf";
import angioplasty from "../downloads/medical/Angioplasty.pdf";
import bladderCancer from "../downloads/medical/Bladder Cancer.pdf";
import breastCancer from "../downloads/medical/Breast Cancer.pdf";
import CAD from "../downloads/medical/CAD.pdf";
import cervicalCancer from "../downloads/medical/Cervical Cancer.pdf";
import colitis from "../downloads/medical/Colitis.pdf";
import colonPolyps from "../downloads/medical/Colon Polyps.pdf";
import colorectalCancer from "../downloads/medical/Colorectal Cancer.pdf";
import crohns from "../downloads/medical/Crohns.pdf";
import depression from "../downloads/medical/Depression.pdf";
import diabetes from "../downloads/medical/Diabetes.pdf";
import drugs from "../downloads/medical/Drugs.pdf";
import hepatitis from "../downloads/medical/Hepatitis.pdf";
import lymphoma from "../downloads/medical/Lymphoma.pdf";
import MS from "../downloads/medical/MS.pdf";
import paceMaker from "../downloads/medical/Pace Maker.pdf";
import parkinsonsDisease from "../downloads/medical/Parkinsons Disease.pdf";
import prostateCancer from "../downloads/medical/Prostate Cancer.pdf";
import skinCancer from "../downloads/medical/Skin Cancer.pdf";
import sleepApnea from "../downloads/medical/Sleep Apnea.pdf";
import stroke from "../downloads/medical/Stroke.pdf";
import testicularCancer from "../downloads/medical/Testicular Cancer.pdf";
import valveSurgery from "../downloads/medical/Valve Surgery.pdf";

import aviation from "../downloads/non-medical/Aviation.pdf";
import climbing from "../downloads/non-medical/Climbing.pdf";
import foreignNational from "../downloads/non-medical/Foreign-National.pdf";
import foreignResident from "../downloads/non-medical/Foreign-Resident.pdf";
import foreignTravel from "../downloads/non-medical/Foreign-Travel.pdf";
import racing from "../downloads/non-medical/Racing.pdf";
import scuba from "../downloads/non-medical/Scuba.pdf";
import skySports from "../downloads/non-medical/Sky-Sports.pdf";

import coverLetter from "../downloads/Cover-Letters.pdf";
import businessInsurance from "../downloads/Business-Insurance.pdf";
import paramedClient from "../downloads/Paramed-Client.pdf";
import financialUnderwriting from "../downloads/Financial-Underwriting.pdf";
import inspectionReportGuidelines from "../downloads/Inspection-Report-Guidelines.pdf";
import lifeUnderwritingOverview from "../downloads/Life-Underwriting-Overview.pdf";

const StyledTabs = styled.div`
  .react-tabs__tab-list {
    ${tw`max-w-[330px] mx-auto grid grid-cols-2 mb-8 md:mb-12 border border-secondary-400 rounded-3xl bg-secondary-400 bg-opacity-5`}
  }
  .react-tabs__tab {
    ${tw`font-heading text-base text-secondary-400 font-medium py-3 px-8 rounded flex items-center justify-center w-full border-none first:rounded-l-3xl last:rounded-r-3xl`}
  }
  .react-tabs__tab--selected {
    ${tw`text-white bg-secondary-400 rounded-3xl`}
  }
`;

const Page = ({ data }) => {
  const content = {
    medical: [
      {
        file: aFib,
        name: "A-Fib",
      },
      {
        file: alcoholUse,
        name: "Alcohol Use",
      },
      {
        file: angioplasty,
        name: "Angioplasty",
      },
      {
        file: bladderCancer,
        name: "Bladder Cancer",
      },
      {
        file: breastCancer,
        name: "Breast Cancer",
      },
      {
        file: CAD,
        name: "CAD",
      },
      {
        file: cervicalCancer,
        name: "Cervical Cancer",
      },
      {
        file: colitis,
        name: "Colitis",
      },
      {
        file: colonPolyps,
        name: "Colon Polyps",
      },
      {
        file: colorectalCancer,
        name: "Colorectal Cancer",
      },
      {
        file: crohns,
        name: "Crohns",
      },
      {
        file: depression,
        name: "Depression",
      },
      {
        file: diabetes,
        name: "Diabetes",
      },
      {
        file: drugs,
        name: "Drugs",
      },
      {
        file: hepatitis,
        name: "Hepatitis",
      },
      {
        file: lymphoma,
        name: "Lymphoma",
      },
      {
        file: MS,
        name: "MS",
      },
      {
        file: paceMaker,
        name: "Pace Maker",
      },
      {
        file: parkinsonsDisease,
        name: "Parkinsons Disease",
      },
      {
        file: prostateCancer,
        name: "Prostate Cancer",
      },
      {
        file: skinCancer,
        name: "Skin Cancer",
      },
      {
        file: sleepApnea,
        name: "Sleep Apnea",
      },
      {
        file: stroke,
        name: "Stroke",
      },
      {
        file: testicularCancer,
        name: "Testicular Cancer",
      },
      {
        file: valveSurgery,
        name: "Valve Surgery",
      },
    ],
    nonMedical: [
      {
        file: aviation,
        name: "Aviation",
      },
      {
        file: climbing,
        name: "Climbing",
      },
      {
        file: foreignNational,
        name: "Foreign National",
      },
      {
        file: foreignResident,
        name: "Foreign Resident",
      },
      {
        file: foreignTravel,
        name: "Foreign Travel",
      },
      {
        file: racing,
        name: "Racing",
      },
      {
        file: scuba,
        name: "Scuba",
      },
      {
        file: skySports,
        name: "Sky Sports",
      },
    ],
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="Underwriting | Insurance Brokerage | Pelorus Financial"
        description="Get help selecting a carrier to fit a unique situation, shopping for the best rate class, and understanding multiple classifications and rates."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <header className="max-w-2xl mb-12 md:mb-16">
                <h1>Underwriting</h1>
                <p>
                  We have on-staff experts with deep knowledge in life insurance
                  underwriting and access to underwriters who understand
                  complexities. We can help you select a carrier to fit a unique
                  medical situation, do preliminary underwriting to shop for the
                  best rate class, and provide multiple classifications and
                  rates, so your client has many options.
                </p>
                <ButtonGhost
                  href="http://prodinfo.ipipeline.com/search?GAID=7205"
                  outboundLink={true}
                  text="Preliminary Application"
                />
              </header>
            </div>
            <div className="order-1 md:order-2 -mx-4 md:mx-0">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32 bg-gray-50 py-20">
        <div className="container">
          <header className="max-w-4xl mx-auto text-center">
            <h2 className="heading-three">Quick Quote Questionnaire</h2>
            <p>
              If you believe your client may not qualify for preferred rates,
              completing a Quick Quote Questionnaire can help. It’ll enable you
              to question your client and develop information an underwriter
              needs to evaluate your case. Fill out the questionnaire, contact
              us, and we'll quickly give you an accurate assessment of your
              case. No client signatures are necessary.
            </p>
          </header>

          <StyledTabs>
            <Tabs>
              <TabList>
                <Tab>Medical</Tab>
                <Tab>Non-Medical</Tab>
              </TabList>

              <TabPanel>
                <ul className="list-disc pl-6 text-primary-400 grid md:grid-cols-3 md:gap-x-5 lg:gap-x-10">
                  <div>
                    {content.medical.slice(0, 9).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {content.medical.slice(9, 18).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {content.medical.slice(18).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul className="list-disc pl-6 text-primary-400 grid md:grid-cols-3 md:gap-x-5 lg:gap-x-10">
                  <div>
                    {content.nonMedical.slice(0, 3).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {content.nonMedical.slice(3, 6).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {content.nonMedical.slice(6).map((content, i) => {
                      return (
                        <li>
                          <a
                            href={content.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 underline"
                          >
                            {content.name}
                          </a>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </TabPanel>
            </Tabs>
          </StyledTabs>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
            <div>
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center uppercase text-primary-400 tracking-widest mb-6">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="text-gray-900">Impaired Risk?</h2>
              <p>
                Our firm is one of the leaders in the impaired risk segmentーthe
                most demanding underwriting process of any type of insurance. We
                strongly encourage our advisor partners to allow us to work on
                obtaining the best rate classes for their clients, including
                reviewing in-force impaired risk cases to obtain better offers.
              </p>
              <ButtonGhost
                href={hippaFile}
                outboundLink={true}
                text="HIPAA Authorization Form"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-16">
            <h2 className="text-gray-900">Additional Guides & Resouces</h2>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-6 md:gap-x-5 lg:gap-x-10">
            <a
              href={coverLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil1.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-2/5 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Cover Letter</p>
            </a>

            <a
              href={businessInsurance}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil2.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-1/3 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Business Insurance</p>
            </a>

            <a
              href={paramedClient}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil3.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-1/3 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Paramed Client</p>
            </a>

            <a
              href={financialUnderwriting}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil4.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-1/3 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Financial Underwriting</p>
            </a>

            <a
              href={inspectionReportGuidelines}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil5.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-1/3 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Inspection Report Guidelines</p>
            </a>

            <a
              href={lifeUnderwritingOverview}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-20 md:pt-28 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.pencil6.publicURL}
                alt="Pencil icon"
                className="absolute top-0 right-0 w-1/2 lg:w-1/3 max-w-[100px] md:max-w-[138px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <p className="heading-four mb-0">Life Underwriting Overview</p>
            </a>
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Underwriting.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Underwriting.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "4.3 Underwriting/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(relativePath: { eq: "4.3 Underwriting/intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    downloadIcon: file(relativePath: { eq: "global/download.svg" }) {
      publicURL
    }
    pencil1: file(relativePath: { eq: "4.3 Underwriting/3.0 card.svg" }) {
      publicURL
    }
    pencil2: file(relativePath: { eq: "4.3 Underwriting/3.1 Card.svg" }) {
      publicURL
    }
    pencil3: file(relativePath: { eq: "4.3 Underwriting/3.2 Card.svg" }) {
      publicURL
    }
    pencil4: file(relativePath: { eq: "4.3 Underwriting/3.3 Card.svg" }) {
      publicURL
    }
    pencil5: file(relativePath: { eq: "4.3 Underwriting/3.4 Card.svg" }) {
      publicURL
    }
    pencil6: file(relativePath: { eq: "4.3 Underwriting/3.5 Card.svg" }) {
      publicURL
    }
  }
`;
export default Page;
