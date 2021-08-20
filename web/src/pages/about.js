import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import CallToAction from "../components/Repeating/CTA";
import ButtonWithUnderline from "../components/Button/ButtonWithUnderline";

const Page = ({ data }) => {
  const quoteBackgroundImages = [
    getImage(data.bgDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.bgMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    team: [
      {
        image: data.teamPlaceholder.childImageSharp.gatsbyImageData,
        first_name: "Brandon",
        last_name: "Ratliff",
        position: "President",
        linkedin: "https://www.linkedin.com/in/brandon-ratliff-63537223/",
        bio: (
          <>
            <p>
              Brandon has partnered with advisors for over 20 years and enjoys
              helping financial professionals implement insurance solutions for
              their clients. His industry expertise includes underwriting,
              advanced marketing, and strong estate and business planning.
              Providing exceptional services efficiently is fundamental to his
              philosophy - he’s a strong believer that it’s the key to
              maintaining successful relationships. Outside of work, Brandon
              enjoys spending time with his family, running, surfing, and
              golfing.
            </p>
          </>
        ),
      },
      {
        image: data.teamPlaceholder.childImageSharp.gatsbyImageData,
        first_name: "Evie",
        last_name: "Ratliff",
        position: "Operations Manager",
        linkedin: "#",
        bio: (
          <>
            <p>
              Evie is our utility player. She’s our team’s backbone and works
              hard to ensure we have everything we need to provide the high
              level of service our clients expect. Additionally, she supports
              our team with commissions/accounting and licensing. Outside of
              work, Evie enjoys spending time with family, is a passionate
              Pittsburgh Steelers fan, and enjoys everything social.
            </p>
          </>
        ),
      },
      {
        image: data.teamPlaceholder.childImageSharp.gatsbyImageData,
        first_name: "Chandler",
        last_name: "Rossi",
        position: "Lead Case Manager",
        linkedin: "#",
        bio: (
          <>
            <p>
              Chandler has been with Pelorus Financial since its inception.
              Chandler supports our partnerships by efficiently and proactively
              ensuring that business is processed. In addition, she is
              foundational in maintaining and nurturing our relationships and
              partnerships through her positive business outlook. Outside of
              work, Chandler enjoys time at the beach, watching the Pittsburgh
              Steelers and everything else life has to offer.
            </p>
          </>
        ),
      },
      {
        image: data.teamPlaceholder.childImageSharp.gatsbyImageData,
        first_name: "Brenton",
        last_name: "Drake",
        position: "Brokerage Manager",
        linkedin: "https://www.linkedin.com/in/brenton-drake-6a3675165/",
        bio: (
          <>
            <p>
              Brandon has partnered with advisors for over 20 years and enjoys
              Brenton partners with advisors, providing them with expertise in
              life insurance, annuity, and disability planning. He supports
              advisors nationwide. His knowledge, efficiency, and responsiveness
              allow our partners to feel confident that they have the most
              favorable solution for their clients. Outside of work, Brenton
              enjoys being active, traveling, and watching the Las Vegas
              Raiders.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="About Pelorus Financial Group | San Diego Insurance Broker"
        description="Every captain needs a compass and that's where Pelorus comes in. We guide you with advanced strategies and smart solutions to help you help your clients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>About Pelorus Financial Group</h1>
              <p className="mb-0">
                Every captain needs a compass and that's where Pelorus Financial
                Group comes in. We guide you with advanced strategies and smart
                solutions to help you help your clients.
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

      <Background
        backgroundImages={quoteBackgroundImages}
        padding="pt-44 md:pt-64 pb-16 md:pb-40 flex items-center"
        className="mb-20 md:mb-32"
        backgroundPosition="75% 50%"
      >
        <header className="md:max-w-[690px] md:text-center">
          <h2 className="text-white">Service Focused</h2>
          <p className="text-white mb-0">
            Our mission is to provide you with exceptional service, a high level
            of expertise, and all of the tools and resources you need for
            success. We’re committed to building and maintaining a strong
            relationship with every advisor we partner with.
          </p>
        </header>
      </Background>

      <div className="container">
        <div className="md:px-10 md:pt-20 md:-mt-44 bg-white relative">
          <ValueProps />
        </div>
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-16">
            <h2>Our Team of Experts</h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-6">
            {content.team.map((content, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(i)}
                  key={i}
                  className="group relative text-left"
                >
                  <div className="overflow-hidden mb-5">
                    <GatsbyImage
                      image={content.image}
                      alt={(content.first_name, content.last_name)}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <p className="heading-four mb-1.5">
                    {content.first_name} {content.last_name}
                  </p>
                  <p className="uppercase tracking-widest mb-0">
                    {content.position}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="md:pt-3 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20">
            <div>
              <GatsbyImage
                image={data.usefulTools.childImageSharp.gatsbyImageData}
                width="560"
                className="mb-6"
              />
              <h2 className="heading-three">Useful Tools</h2>
              <p>
                Get access to quotes, forms and applications, underwriting,
                calculators, and more in our financial services toolbox.
              </p>
              <ButtonWithUnderline
                href="/tools/"
                text="Explore Tools & Resources"
              />
            </div>
            <div>
              <GatsbyImage
                image={data.stayInfomed.childImageSharp.gatsbyImageData}
                width="560"
                className="mb-6"
              />
              <h2 className="heading-three">Stay Informed</h2>
              <p>
                Read our blog for industry insights, tips, and educational
                information to help you navigate the markets.
              </p>
              <ButtonWithUnderline href="/blog/" text="Visit Our Blog" />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} slides={content.team} />
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
    hero: file(relativePath: { eq: "about/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bgDesktop: file(relativePath: { eq: "about/2.0 About - desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bgMobile: file(relativePath: { eq: "about/2.0 About - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    usefulTools: file(relativePath: { eq: "about/useful-tools.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    stayInfomed: file(relativePath: { eq: "about/stay-infomed.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    teamPlaceholder: file(relativePath: { eq: "about/team-placeholder.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
