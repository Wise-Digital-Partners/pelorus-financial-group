import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Case Status Live | Pelorus Financial Group"
        description="Get real-time, 24/7 secure and confidential web access to your case data. View your pending case data, licensing, contracting, and commission data."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Case Status Live</h1>
              <p>
                Get real-time, 24/7 secure and confidential web access to your
                case data. View your pending case data, licensing, contracting,
                and commission data. Plus, use the reporting tools to display
                the full book of submitted and placed business.
              </p>
              <ButtonGhost
                href="https://mysmartoffice.ez-data.com/"
                outboundLink={true}
                text="Check Case Status"
              />
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

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Case status live.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Case status live.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "4.6 Case Status Live/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
