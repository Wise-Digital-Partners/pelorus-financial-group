import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";

import CallToAction from "../components/Repeating/CTA";
import ButtonWithUnderline from "../components/Button/ButtonWithUnderline";

import downloadFle from "../downloads/DI Request form.pdf";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Disability Insurance Broker | Pelorus Financial Group"
        description="We're a disability insurance broker that will get you the latest products and regulatory information to help you build, navigate, and implement plans."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Disability Insurance</h1>
              <p className="mb-0">
                Disability insurance and income replacement have evolved into a
                diverse collection of products and solutions. They're designed
                to protect against disruptions to not only a client's income but
                also the assets they've worked hard to build. As your disability
                insurance broker, we provide the most current products and
                regulatory information to help you build, navigate, and
                implement plans for your clients.
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
              <h2>Types of Disability Insurance We Offer</h2>
              <p>We offer a wide range of disability insurance coverage:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Long-Term Disability</li>
                <li>Short-Term Disability</li>
                <li>Key Man Disability</li>
                <li>Physician Disability</li>
                <li>Long-Term Care</li>
                <li>Asset Based Long-Term Care</li>
              </ul>

              <p className="mb-1">
                Need a Disability Income Illustration Request form?{" "}
              </p>
              <ButtonWithUnderline
                href={downloadFle}
                outboundLink={true}
                text="Download one here"
              />
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
      relativePath: { eq: "open-graph/facebook/Income _ Asset Protection.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Income _ Asset Protection.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: {
        eq: "3.3 Income _ Asset protection/1.0 Hero - Income _ Asset Protection.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(
      relativePath: {
        eq: "3.3 Income _ Asset protection/2.0 Disability Insurance.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
