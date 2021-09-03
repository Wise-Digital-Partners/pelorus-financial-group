import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Wealth Accumulation Insurance | Pelorus Financial Group"
        description="Get wealth accumulation insurance expertise to help you develop a plan that's right for your client."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Wealth Accumulation Insurance</h1>
              <p>
                Regardless of when your clients begin to accumulate wealth,
                ensuring the efficiency and effectiveness of the plan requires a
                long-term investment strategy, a disciplined approach, and a
                solid understanding of your client's risk tolerance. We’ll help
                you develop a wealth accumulation insurance plan that's right
                for your client.
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
              <h2>Wealth Accumulation Vehicles</h2>
              <p>
                Our experienced team can help you maximize the distribution of
                assets, such as:
              </p>
              <ul className="list-disc pl-6">
                <li>Permanent Life Insurance</li>
                <li>Premium Financing</li>
                <li>Fixed Annuities</li>
                <li>Variable Annuities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ValueProps />
      <Toolbox />
      <Testimonials />
      <RecentBlogPosts />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Wealth Succession.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Wealth Succession.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: {
        eq: "3.8 Wealth Succession/1.0 Hero - Wealth Succession.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: { eq: "3.8 Wealth Succession/2.0 Wealth Accumulation.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
