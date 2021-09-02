import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import ButtonWithUnderline from "../components/Button/ButtonWithUnderline";

import downloadFile from "../downloads/PFG Licensing.pdf";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Contracting & Licensing | Pelorus Financial Group"
        description="Complete your contracting request with Pelorus by filling out a short questionnaire and connecting to SureLC, our online contracting tool."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Contracting & Licensing</h1>
              <p>
                To complete your contracting request, fill out the questionnaire
                below and then connect to SureLC, our online contracting tool.
                SureLC provides you with up-to-date licensing statuses for each
                of your state licenses and the current contracting status with
                your carrier partners. Note that all pages of the contracting
                packet must be completed and submitted before you begin working
                with us.
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

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center text-center">
            <div className="bg-primary-800 px-4 md:px-5 lg:px-10 py-12 md:py-16 rounded h-full">
              <h2 className="heading-three text-white">
                Download Questionnaire
              </h2>
              <p className="text-white">
                The information you share will be securely stored within our
                online contracting solution.
              </p>
              <ButtonGhost
                href={downloadFile}
                outboundLink={true}
                altStyle={true}
                text="Download PDF"
              />
            </div>

            <div className="bg-primary-50 px-4 md:px-5 lg:px-10 py-12 md:py-16 rounded h-full">
              <h2 className="heading-three text-primary-800">
                Online Questionnaire
              </h2>
              <p>
                The information you share will be securely stored within our
                online contracting solution.
              </p>
              <ButtonGhost
                href="https://surelc.surancebay.com/sbweb/agency/665"
                outboundLink={true}
                text="Launch SureLC"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
            <div>
              <div className="bg-gray-50 px-3 py-1 inline-flex items-center text-sm md:text-base uppercase text-primary-400 tracking-widest mb-6">
                <img
                  src={data.downloadIcon.publicURL}
                  alt="Download icon"
                  className="mr-2"
                />{" "}
                Resource Line
              </div>
              <h2 className="heading-three">
                Required Training: Anti-Money Laundering
              </h2>
              <p>
                We’re happy to offer you free access to the required Anti-Money
                Laundering (AML) training. It’s accepted by all of the life
                insurance carriers we represent. Once you’ve completed this
                short training, it’ll automatically be reported to the carriers.
              </p>
              <ButtonWithUnderline
                href="http://nailba.limra.com/Nailba_default.html"
                outboundLink={true}
                text="Begin Training"
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
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "4.4 Contracting/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    intro: file(relativePath: { eq: "4.4 Contracting/intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    downloadIcon: file(relativePath: { eq: "global/download.svg" }) {
      publicURL
    }
  }
`;
export default Page;
