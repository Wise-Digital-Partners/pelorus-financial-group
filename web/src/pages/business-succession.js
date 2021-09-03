import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";

import CallToAction from "../components/Repeating/CTA";

import coverLetter from "../downloads/Cover-Letters.pdf";
import businessFactFinder from "../downloads/Business Fact Finder.pdf";
import businessInsurance from "../downloads/Business-Insurance.pdf";
import generateSalesBusinessPlanningServices from "../downloads/Generate Sales with Business Planning Services.pdf";
import businessCycle from "../downloads/The business cycle.pdf";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Business Succession | Pelorus Financial Group"
        description="Get complete business succession support from Pelorus, everything from planning and implementation to administrative expertise and more."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Business Succession</h1>
              <p className="mb-0">
                Every stage in your client's business has different needs. We
                provide complete business succession support, from planning and
                implementation to administrative expertise and more. Whether
                planning for a business transition, key employee retention, or
                an executive benefits package to attract and retain key
                employees, we are here to help.
              </p>
            </div>
            <div className="-mx-4 md:mx-0 order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
            <div>
              <h2>Useful Tools</h2>
              <p>
                Here are some handy resources to help with your client work:
              </p>
              <ul className="list-disc pl-6 mb-8 text-primary-400">
                <li className="font-heading font-medium">
                  <a
                    href={coverLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Fundamentals of a Great Cover Letter
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={businessInsurance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Business Financial Basics
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={businessCycle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Business Cycle Opportunities
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={businessFactFinder}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Business Insurance Fact Finder
                  </a>
                </li>
              </ul>

              <p>Offer your clients a free:</p>
              <ul className="list-disc pl-6 text-primary-400">
                <li className="font-heading font-medium">
                  <a
                    href={generateSalesBusinessPlanningServices}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Informal Business Valuation and Buy/Sell Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ValueProps />
      <Toolbox />
      <Testimonials />

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Business Succession.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Business Succession.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: {
        eq: "3.7 Business Succession/1.0 Hero - Business Succession.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: {
        eq: "3.7 Business Succession/2.0 Business Succession.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
