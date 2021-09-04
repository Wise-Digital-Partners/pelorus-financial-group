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
import estateGrowthGuidelines from "../downloads/Estate-Growth-Guidelines.pdf";
import incomeReplacementGuidelines from "../downloads/Income-Replacement-Guidelines.pdf";
import inspectionReportGuidelines from "../downloads/Inspection-Report-Guidelines.pdf";
import premiumRatioGuidelines from "../downloads/Premium-Ratio-Guidelines.pdf";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Estate Planning Insurance | Pelorus Financial Group"
        description="Get access to the tools and resources so you can develop estate planning insurance for your clients. We'll help you identify the best products and strategies."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Estate Planning Insurance</h1>
              <p className="mb-0">
                At Pelorus, we work with advisors, attorneys, and estate
                planners to identify the best insurance products and strategies
                to fit your client's needs. We have the tools and resources to
                review estate planning insurance options and help you develop a
                comprehensive plan.
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
              <h2>Helpful Guides</h2>
              <p>Here are some useful links to help with your planning:</p>
              <ul className="list-disc pl-6 text-primary-400">
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
                    href={estateGrowthGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Estate Growth Guidelines
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={incomeReplacementGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inspection Report Guidelines
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={inspectionReportGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reinsurance and Retention
                  </a>
                </li>
                <li className="font-heading font-medium">
                  <a
                    href={premiumRatioGuidelines}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Premium Ratio Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ValueProps />
      <Toolbox />
      <Testimonials className="mb-0" />

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Estate Planning.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Estate Planning.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: { eq: "3.5 Estate Planning/1.0 Hero - Estate Planning.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: { eq: "3.5 Estate Planning/2.0 Estate Planning.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
