import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const content = [
    {
      image: data.tool2.childImageSharp.gatsbyImageData,
      heading: "Forms & Applications",
      text: "iPipeline's iGO e-App ensures your application is 100% complete, signed electronically, and then submitted straight to the carrier.",
      link: "/forms-applications/",
    },
    {
      image: data.tool3.childImageSharp.gatsbyImageData,
      heading: "Underwriting",
      text: "Start a preliminary application and access our quick quote questionnaire, and get access to on-staff experts.",
      link: "/underwriting/",
    },
    {
      image: data.tool4.childImageSharp.gatsbyImageData,
      heading: "Contracting",
      text: "Our online system is designed to make submitting contracts easier, faster & more accurate.",
      link: "/contracting-licensing/",
    },
    {
      image: data.tool5.childImageSharp.gatsbyImageData,
      heading: "Carrier Partners",
      text: "We work with top insurance carriers who can provide every insurance solution for your clients.",
      link: "/carrier-partners/",
    },
    {
      image: data.tool6.childImageSharp.gatsbyImageData,
      heading: "Case Status Live",
      text: "Get real-time, 24/7 secure and confidential web access to your case data.",
      link: "/case-status-live/",
    },
    {
      image: data.tool7.childImageSharp.gatsbyImageData,
      heading: "Calculators",
      text: "Use our handy calculators to help you provide accurate figures for your clients.",
      link: "/calculators/",
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Tools | Insurance Brokerage Agency | Pelorus Financial"
        description="Let the Pelorus wealth accumulation insurance experts guide you in long-term investment strategies and develop a plan that's right for your client."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-28 md:mb-32">
        <div className="container">
          <header className="max-w-2xl mb-12 md:mb-16">
            <h1>Financial Advisor Toolbox</h1>
            <p>
              When you partner with Pelorus, you get access to premium tools to
              help you work your cases. Here’s everything you need all in one
              place.
            </p>
          </header>

          <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center mb-12 md:mb-16">
            <div className="md:col-start-1 md:col-span-7">
              <GatsbyImage image={data.tool1.childImageSharp.gatsbyImageData} />
            </div>
            <div className="md:col-end-13 md:col-span-5">
              <h2>Get a Quote</h2>
              <p>
                Start the research for your next case using the most competitive
                products to fit your client's needs.
              </p>
              <ButtonSolid href="/get-a-quote/" text="Run a Quote" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-y-14 md:gap-x-5 lg:gap-x-10">
            {content.map((content, i) => {
              return (
                <AniLink fade to={content.link} className="group">
                  <GatsbyImage
                    image={content.image}
                    alt={content.heading}
                    className="w-full"
                  />
                  <div className="pt-6">
                    <h2 className="heading-four group-hover:text-primary-400 transition-colors duration-300 ease-linear mb-4">
                      {content.heading}
                    </h2>
                    <p className="mb-0">{content.text}</p>
                  </div>
                </AniLink>
              );
            })}
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
      relativePath: { eq: "open-graph/facebook/Tools Hub.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Tools Hub.jpg" }
    ) {
      publicURL
    }
    tool1: file(
      relativePath: { eq: "4.0 Tools (hub)/1.0 tool - Get a quote.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool2: file(relativePath: { eq: "4.0 Tools (hub)/2.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool3: file(relativePath: { eq: "4.0 Tools (hub)/3.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool4: file(relativePath: { eq: "4.0 Tools (hub)/4.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool5: file(relativePath: { eq: "4.0 Tools (hub)/5.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool6: file(relativePath: { eq: "4.0 Tools (hub)/6.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
    tool7: file(relativePath: { eq: "4.0 Tools (hub)/7.0 - Tool.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 746)
      }
    }
  }
`;
export default Page;
