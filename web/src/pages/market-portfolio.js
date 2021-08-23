import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const content = [
    {
      image: data.lifeInsurance.childImageSharp.gatsbyImageData,
      heading: "Life Insurance",
      text: "We offer the best industry options for life insurance. Your clients will benefit from our expansive portfolio.",
      link: "/life-insurance-broker/",
    },
    {
      image: data.annuities.childImageSharp.gatsbyImageData,
      heading: "Annuities",
      text: "Let us assist you with quotes, contracting, and servicing for all your annuity needs.",
      link: "/annuity-broker-advisor/",
    },
    {
      image: data.assetProtection.childImageSharp.gatsbyImageData,
      heading: "Income and Asset Protection",
      text: "We’ll help you navigate the diverse collection of products and solutions designed to protect income and assets.",
      link: "/disability-insurance-broker/",
    },
    {
      image: data.assetBasedLTC.childImageSharp.gatsbyImageData,
      heading: "Asset Based LTC",
      text: "You’ll have access to a suite of asset-based long-term care solutions for your clients.",
      link: "/asset-based-ltc-insurance/",
    },
    {
      image: data.estatePlanning.childImageSharp.gatsbyImageData,
      heading: "Estate Planning",
      text: "We guide advisors, attorneys, and estate planners to the right insurance products and strategies.",
      link: "/estate-planning-insurance/",
    },
    {
      image: data.premiumFinancing.childImageSharp.gatsbyImageData,
      heading: "Premium Financing",
      text: "Our firm can assist in the case design, implementation, and annual servicing of life insurance premium cases.",
      link: "/premium-finance-services/",
    },
    {
      image: data.businessSuccession.childImageSharp.gatsbyImageData,
      heading: "Business Succession",
      text: "We can help you identify solutions for all stages of your client’s business.",
      link: "/business-succession/",
    },
    {
      image: data.wealthSuccession.childImageSharp.gatsbyImageData,
      heading: "Wealth Accumulation",
      text: "We provide you with the tools and resources to handle complex case design, contracting, and servicing.",
      link: "/wealth-accumulation-insurance/",
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Market Portfolio | Insurance Brokerage | Pelorus Financial"
        description="Access our comprehensive market portfolio of life insurance, annuities, asset based LTC, estate planning, wealth accumulation, business succession, and more."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-2xl mb-12 md:mb-16">
            <h1>Our Market Portfolio</h1>
            <p>
              Whether you're targeting your efforts at a specific market or
              servicing the full line, Pelorus Financial Group has you covered.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-10 md:gap-x-5 lg:gap-x-10">
            {content.map((content, i) => {
              return (
                <AniLink
                  fade
                  to={content.link}
                  className="group grid md:grid-cols-12 shadow-2xl rounded border-4 border-transparent hover:border-primary-400/40"
                >
                  <div className="md:col-start-1 md:col-span-4">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      width="200"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="md:col-end-13 md:col-span-8 relative">
                    <div className="px-4 md:px-5 lg:px-8 pt-6 md:pt-7 pb-7 md:pb-8">
                      <h2 className="heading-six group-hover:text-primary-400 transition-colors duration-300 ease-linear mb-4">
                        {content.heading}
                      </h2>
                      <p className="mb-0">{content.text}</p>
                    </div>
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
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    lifeInsurance: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 01.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    annuities: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 02.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    assetProtection: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 03.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    assetBasedLTC: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 04.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    estatePlanning: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 05.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    premiumFinancing: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 06.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    businessSuccession: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 07.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    wealthSuccession: file(
      relativePath: { eq: "3.0 Markets (hub)/Market Hub - 08.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`;
export default Page;
