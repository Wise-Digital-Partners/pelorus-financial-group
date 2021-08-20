import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Calculators | Insurance Brokerage | Pelorus Financial"
        description="Get access to a wide selection of calculators that'll make your job easier when starting a plan."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-2xl mb-12 md:mb-16">
            <h1>Calculators</h1>
            <p>
              We have a collection of calculators that’ll make your job easier.
              Here’s what you need to start a plan.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-y-10 lg:gap-y-20  md:gap-x-10 lg:gap-x-20">
            <AniLink
              fade
              to="http://www.lifehappens.org/life-insurance-needs-calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-40 md:pt-48 lg:pt-52 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.calculator1.publicURL}
                alt="Calculator icon"
                className="absolute top-0 right-0 w-1/2 max-w-[200px] md:max-w-[240px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="heading-four">Life Insurance Calculator</h2>
              <p className="mb-0">
                The information you share will be securely stored within our
                online contracting solution.
              </p>
            </AniLink>

            <AniLink
              fade
              to="http://www.lifehappens.org/human-life-value-calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-40 md:pt-48 lg:pt-52 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.calculator2.publicURL}
                alt="Calculator icon"
                className="absolute top-0 right-0 w-1/2 max-w-[200px] md:max-w-[240px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="heading-four">Human Life Value Calculator</h2>
              <p className="mb-0">
                Calculate an approximate measure of a person's net contribution
                to their family.
              </p>
            </AniLink>

            <AniLink
              fade
              to="http://www.dinkytown.net/java/Disability.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-40 md:pt-48 lg:pt-52 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.calculator3.publicURL}
                alt="Calculator icon"
                className="absolute top-0 right-0 w-1/2 max-w-[200px] md:max-w-[240px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="heading-four">
                Disability Insurance Needs Calculator
              </h2>
              <p className="mb-0">
                Determine how much disability insurance your client may need to
                cover expenses.
              </p>
            </AniLink>

            <AniLink
              fade
              to="https://www.calcxml.com/calculators/ins07"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-400 px-4 pb-10 pt-40 md:pt-48 lg:pt-52 rounded shadow-3xl h-full relative"
            >
              <img
                src={data.calculator4.publicURL}
                alt="Calculator icon"
                className="absolute top-0 right-0 w-1/2 max-w-[200px] md:max-w-[240px]"
              />
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-2.5">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="heading-four">Life Insurance Calculator</h2>
              <p className="mb-0">
                The information you share will be securely stored within our
                online contracting solution.
              </p>
            </AniLink>
          </div>
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
              <h2 className="heading-four">Need More Calculators?</h2>
              <p>
                Here's a mega-list of calculators we’ll share with you to help
                with your planning.
              </p>
              <ButtonGhost
                href="http://www.dinkytown.net/"
                outboundLink={true}
                text="Check Out The List"
              />
            </div>
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
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    intro: file(relativePath: { eq: "4.7 Calculators/intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    downloadIcon: file(relativePath: { eq: "global/download.svg" }) {
      publicURL
    }
    calculator1: file(
      relativePath: { eq: "4.7 Calculators/1.1 Calculator Card.svg" }
    ) {
      publicURL
    }
    calculator2: file(
      relativePath: { eq: "4.7 Calculators/1.2 Calculator Card.svg" }
    ) {
      publicURL
    }
    calculator3: file(
      relativePath: { eq: "4.7 Calculators/1.3 Calculator Card.svg" }
    ) {
      publicURL
    }
    calculator4: file(
      relativePath: { eq: "4.7 Calculators/1.4 Calculator Card.svg" }
    ) {
      publicURL
    }
  }
`;
export default Page;
