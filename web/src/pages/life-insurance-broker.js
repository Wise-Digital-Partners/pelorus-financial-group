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
        title="Life Insurance Broker | Pelorus Financial Group"
        description="With Pelorus, you get a top life insurance broker with a passion for sound long-term financial planning that helps advisors fulfill their client's needs."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Life Insurance Broker</h1>
              <p>
                Pelorus is a top life insurance broker serving San Diego and
                nationwide. We have a passion for sound long-term financial
                planning that helps advisors fulfill their client’s needs. Our
                team continuously researches and evaluates the best industry
                options for our reputable life insurance portfolio.
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
              <h2>What’s In Our Portfolio</h2>
              <p>We offer options for many types of life insurance:</p>
              <ul className="list-disc pl-6">
                <li>Guaranteed and Simplified Issue</li>
                <li>Impaired Risk</li>
                <li>Indexed Life</li>
                <li>Survivorship Life</li>
                <li>Term Life</li>
                <li>Universal Life</li>
                <li>Whole Life</li>
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
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: { eq: "3.1 Life Insurance/1.0 Hero -  Life Insurance.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: {
        eq: "3.1 Life Insurance/2.0 collage - Life Insurance.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
