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
        image: data.brandon.childImageSharp.gatsbyImageData,
        imagePopup: data.brandonPopup.childImageSharp.gatsbyImageData,
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
        image: data.evie.childImageSharp.gatsbyImageData,
        imagePopup: data.eviePopup.childImageSharp.gatsbyImageData,
        first_name: "Evie",
        last_name: "Ratliff",
        position: "Operations Manager",
        // linkedin: "",
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
        image: data.chandler.childImageSharp.gatsbyImageData,
        imagePopup: data.chandlerPopup.childImageSharp.gatsbyImageData,
        first_name: "Shelby",
        last_name: "Martinez",
        position: "Lead Case Manager",
        // linkedin: "",
        bio: (
          <>
            <p>
            Shelby comes to Pelorus Financial group with years of industry experience.  Shelby supports our partnerships by efficiently and protectively ensuring that business is processed and placed with the carriers.  In addition, she is foundational in maintaining and nurturing our partnerships through her positive business outlook.  Outside of work Shelby enjoys spending time with her family and traveling the world.
            </p>
          </>
        ),
      },
      {
        image: data.brenton.childImageSharp.gatsbyImageData,
        imagePopup: data.brentonPopup.childImageSharp.gatsbyImageData,
        first_name: "Ralph",
        last_name: "Fernandez",
        position: "Brokerage Manager",
        linkedin: "https://www.linkedin.com/in/brenton-drake-6a3675165/",
        bio: (
          <>
            <p>
            Ralph comes to Pelorus financial Group with over 10 years of industry experience.  Ralph supports our partnerships as a resource for quoting, case design, underwriting questions and everything else that can help in the business process.  Outside of work Ralph enjoys cooking, traveling and rooting for the Las Vegas Raiders. 
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
                At Pelorus, we've partnered with advisors for over 19 years in
                life insurance, annuities, disability, and long-term care
                insurance. We provide exceptional service, underwriting
                expertise, advanced marketing, and strategic estate and business
                planning techniques. In marine navigation, a Pelorus is a tool
                for maintaining the bearing of a vessel at sea, and like
                sailors, we're here to help you guide your clients.
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
                  <div className="overflow-hidden mb-5 filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear">
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
      relativePath: { eq: "open-graph/facebook/About Pelorus.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/About Pelorus.jpg" }
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
    brandon: file(relativePath: { eq: "about/Brandon Ratliff.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    brenton: file(relativePath: { eq: "about/Ralph Fernandez.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    chandler: file(relativePath: { eq: "about/Shelby Martinez.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    evie: file(relativePath: { eq: "about/3.4 Evie.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    brandonPopup: file(relativePath: { eq: "about/Brandon Ratliff.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 788)
      }
    }
    brentonPopup: file(relativePath: { eq: "about/placeholder.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 788)
      }
    }
    chandlerPopup: file(relativePath: { eq: "about/placeholder.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 788)
      }
    }
    eviePopup: file(relativePath: { eq: "about/Evie Pop up.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 788)
      }
    }
  }
`;
export default Page;
