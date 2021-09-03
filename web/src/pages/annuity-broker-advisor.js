import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";

import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Annuity Broker & Advisor | Pelorus Financial Group"
        description="Pelorus is an annuity broker & advisor that works with the largest and most reputable carriers in the world. Get help with quotes, contracting, & servicing."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Annuities</h1>
              <p>
                With some of the deepest roots in the industry, partnering with
                Pelorus means you will work with a Brokerage General Agency and
                advisor that understands how to design and sell annuities. We
                work with the largest and most reputable carriers in the world
                distributing fixed and indexed annuities. Let us assist you with
                quotes, contracting, and servicing for all your annuity needs.
              </p>
              <ButtonSolid href="/get-a-quote/" text="Run a Quote" />
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
              <h2>Types of Annuities We Offer</h2>
              <p>
                We continuously research and determine the best assets to offer
                and hold:
              </p>
              <ul className="list-disc pl-6">
                <li>Fixed</li>
                <li>Indexed</li>
                <li>Multi-Year Guarantees</li>
                <li>Single Premium Immediate Annuities</li>
                <li>Structured Settlements</li>
                <li>Terminal Funding</li>
                <li>Fixed Rate Annuities</li>
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
      relativePath: { eq: "open-graph/facebook/Annuities.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Annuities.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: { eq: "3.2 Annuities/1.0 Hero  - Annuities.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: { eq: "3.2 Annuities/2.0 Annuities Collage.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
