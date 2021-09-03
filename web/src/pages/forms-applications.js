import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithUnderline from "../components/Button/ButtonWithUnderline";

import downloadFile from "../downloads/LifeLine-app.pdf";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Forms & Applications | Pelorus Financial Group"
        description="Save time with iPipeline's iGO e-App for electronic signatures and our streamlined LifeLine Application."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Forms & Applications</h1>
              <p>
                iPipeline's iGO e-App ensures your application is 100% complete,
                signed electronically, and then submitted straight to the
                carrier. You save time, and your placement ratio will increase
                as a result.
              </p>
              <ButtonSolid
                href="https://formspipe.ipipeline.com/?GAID=7205"
                outboundLink={true}
                text="Launch iPipeline"
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
              <h2>LifeLine Application</h2>
              <p>
                Selling insurance doesn't have to be complicated. Requirements
                and forms constantly change, but we've simplified the process
                with our LifeLine application. It's a streamlined, single-page
                form. You simply complete the application, and your client will
                be contacted by the service provider to arrange their exam and
                complete application questions.
              </p>
              <ButtonWithUnderline
                href={downloadFile}
                outboundLink={true}
                text="Download Application"
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
      relativePath: { eq: "open-graph/facebook/Forms.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Forms.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "4.2 Forms _ applicaitons/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(relativePath: { eq: "4.2 Forms _ applicaitons/intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
