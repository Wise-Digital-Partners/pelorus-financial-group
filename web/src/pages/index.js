import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";
import LogoCloud from "../components/Repeating/LogoCloud";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonWithUnderline from "../components/Button/ButtonWithUnderline";

const Page = ({ data }) => {
  const quoteBackgroundImages = [
    getImage(data.quoteBgDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.quoteBgMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const [animated, setAnimated] = useState(["0px", "-16px"]);

  const bounceTransition = {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Insurance Brokerage Agency | Pelorus Financial Group"
        description="Get expert guidance, smart strategies, and a network of top-rated carriers from Pelorus Financial Group, your premium insurance brokerage agency."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="relative pt-32 md:pt-0 mb-2 md:mb-32">
        <div className="max-h-[900px] overflow-hidden">
          <video
            width="100%"
            autoPlay
            muted
            loop
            className="hidden md:block h-full w-full"
          >
            <source
              src="https://player.vimeo.com/external/589520595.hd.mp4?s=8b601c0f479a5d42b8b8d2cc39c1cc910f01b73b&profile_id=175"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="container absolute top-0 left-0 right-0 h-full">
          <div className="max-w-[730px] h-full pb-20 lg:pb-10 xl:pb-20 flex items-start flex-col justify-end z-10">
            <p className="font-heading text-primary-100 text-mobile-7xl md:text-7xl font-bold mb-12 md:mb-5">
              Helping You Chart a Course For Your Clients’ Future
            </p>
            <p className="text-lg md:text-xl text-white md:font-semibold mb-12 md:mb-5">
              Expert guidance, smart strategies, and a network of top-rated
              insurance carriers for financial advisors and C-suite business
              planning executives.
            </p>

            <ButtonSolid
              modal="modal-contact"
              text="Run a Quote"
              className="w-full md:w-auto"
            />

            <motion.img
              src={data.scrollArrow.publicURL}
              alt="Scroll arrow"
              transition={bounceTransition}
              animate={{ y: animated }}
              className="mt-20 lg:mt-20 xl:mt-32"
            />
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="-mx-4 md:mx-0">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                width="560"
              />
            </div>
            <div>
              <h1>
                Your Insurance Brokerage Agency from San Diego to Nationwide
              </h1>
              <p>
                Navigating life’s challenges is easier with trusted partners.
                With Pelorus, advisors get exclusive access to a team of
                dedicated financial experts specializing in business and estate
                planning, underwriting, and marketing. We provide exceptional
                service, move fast and efficiently, and employ advanced
                strategies and techniques.
              </p>
              <ButtonWithUnderline href="/about/" text="Learn More" />
            </div>
          </div>
        </div>
      </section>

      <Background
        backgroundImages={quoteBackgroundImages}
        padding="md:pt-44 md:pb-32 h-screen md:h-auto flex items-center"
        className="mb-20 md:mb-32"
      >
        <div className="max-w-[690px] mx-auto text-center">
          <blockquote>
            <q className="font-heading text-primary-600 text-4xl tracking-wider block mb-8 md:mb-10">
              It is not the ship so much as the skillful sailing that assures
              the prosperous voyage
            </q>
            <cite className="tracking-widest uppercase not-italic">
              - George William Curtis
            </cite>
          </blockquote>
        </div>
      </Background>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="md:px-10 md:pt-20 md:-mt-44 bg-white relative">
            <header className="flex justify-between flex-col md:flex-row md:items-center mb-12 md:mb-16">
              <h2 className="md:mb-0">A Comprehensive Market Portfolio</h2>
              <ButtonWithUnderline
                href="/market-portfolio/"
                text="Learn More"
              />
            </header>
            <div className="grid md:grid-cols-4 gap-y-10 md:gap-x-6">
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={data.lifeInsurance.childImageSharp.gatsbyImageData}
                  />
                </div>
                <p className="heading-five mb-0">Life Insurance</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={data.annuities.childImageSharp.gatsbyImageData}
                  />
                </div>
                <p className="heading-five mb-0">Annuities</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={data.assetProtection.childImageSharp.gatsbyImageData}
                  />
                </div>
                <p className="heading-five mb-0">Income & Asset Protection</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={data.assetBasedLTC.childImageSharp.gatsbyImageData}
                  />
                </div>
                <p className="heading-five mb-0">Asset Based LTC</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={data.estatePlanning.childImageSharp.gatsbyImageData}
                  />
                </div>
                <p className="heading-five mb-0">Estate Planning</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={
                      data.premiumFinancing.childImageSharp.gatsbyImageData
                    }
                  />
                </div>
                <p className="heading-five mb-0">Premium Financing</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={
                      data.businessSuccession.childImageSharp.gatsbyImageData
                    }
                  />
                </div>
                <p className="heading-five mb-0">Business Succession</p>
              </AniLink>
              <AniLink fade to="/life-insurance-broker/" className="group">
                <div className="filter grayscale group-hover:grayscale-0 mb-2 transition-all duration-300 ease-linear">
                  <GatsbyImage
                    image={
                      data.wealthSuccession.childImageSharp.gatsbyImageData
                    }
                  />
                </div>
                <p className="heading-five mb-0">Wealth Succession</p>
              </AniLink>
            </div>
          </div>
        </div>
      </section>

      <ValueProps />

      <Toolbox />
      <LogoCloud />
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
    heroDesktop: file(relativePath: { eq: "home/1.0 HP Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0-hero-curve-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    scrollArrow: file(relativePath: { eq: "home/1.1 HP Scroll Arrow .svg" }) {
      publicURL
    }
    intro: file(relativePath: { eq: "home/2.0 HP intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    quoteBgDesktop: file(
      relativePath: { eq: "home/3.0 HP quote background.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    quoteBgMobile: file(relativePath: { eq: "home/quote-bg-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    lifeInsurance: file(
      relativePath: { eq: "home/4.1 Home - Life Insurance.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    annuities: file(relativePath: { eq: "home/4.2 Home - Annuities.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    assetProtection: file(
      relativePath: { eq: "home/4.3 Home - Income _ Asset Protection.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    assetBasedLTC: file(
      relativePath: { eq: "home/4.4 Home - Asset Based LTC.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    estatePlanning: file(
      relativePath: { eq: "home/4.5 Home - Estate Planning.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    premiumFinancing: file(
      relativePath: { eq: "home/4.6 Home - Premium Financing.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    businessSuccession: file(
      relativePath: { eq: "home/4.7 Home - Business Succession.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    wealthSuccession: file(
      relativePath: { eq: "home/4.8 Home - Wealth Succession.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
  }
`;
export default Page;
