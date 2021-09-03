import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";

import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Asset Based LTC Insurance | Pelorus Financial Group"
        description="Put your clients' assets to work to provide them with long-term care benefits. At Pelorus, we offer a suite of asset based LTC insurance solutions."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Asset Based LTC Insurance</h1>
              <p className="mb-0">
                Put your clients' assets to work using a life insurance policy
                or an annuity to provide them with long-term care benefits.
                Clients can use their asset based LTC insurance if they need it
                or leave the death benefit or accumulated value as part of their
                financial legacy. We offer a suite of asset based long-term care
                solutions.
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
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div>
              <h2 className="heading-three">Benefits</h2>
              <p>
                An asset based LTC gives your client the peace of mind in
                knowing that if they ever need long-term care, there will be
                money to help cover the costs. It gives them two policies in one
                - one part that will pay out long-term care benefits if needed,
                and the other that will pay a death benefit.
              </p>
            </div>
            <div>
              <h2 className="heading-three">How It Works</h2>
              <div className="heading-six text-primary-600 mb-2.5">
                Example:
              </div>
              <p>
                A 60-year-old nonsmoking woman in good health pays a $100,000
                premium for a policy to provide up to six years of long-term
                care benefits.
              </p>
              <p>
                If she never needs long-term care, the policy pays a $166,766
                death benefit to her beneficiary. If she needs long-term care,
                the policy pays $500,298 for qualified long-term care expenses.
              </p>
              <p>
                Her maximum available benefit is $83,383 a year for six years.
              </p>
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
      relativePath: { eq: "open-graph/facebook/Asset Based LTC.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Asset Based LTC.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: { eq: "3.4 Asset Based LTC/1.0 Hero - Asset Based LTC.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
