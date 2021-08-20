import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Reviews | Pelorus Financial Group | Insurance Brokerage"
        description="Let us know how we’re doing! At Pelorus, we value our partnerships with advisors and would love to hear how we’ve had an impact on your business."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Background
        backgroundImages={data.hero.childImageSharp.gatsbyImageData}
        padding="py-20 md:py-32"
        className="mb-16 md:mb-20"
      >
        <header className="max-w-2xl mx-auto text-center">
          <h1 className="text-white">Leave A Review</h1>
          <p className="text-white md:text-xl">
            We value the partnerships we’ve developed with advisors and would
            love to hear how we’ve had an impact on your business. Let us know
            how we’re doing!
          </p>
          <ButtonSolid href="/review-us/" text="Review Us" />
        </header>
      </Background>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
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
    hero: file(relativePath: { eq: "reviews/reviews-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
