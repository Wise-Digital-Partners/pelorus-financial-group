import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Toolbox from "../components/Repeating/Toolbox";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Premium Finance Services | Pelorus Financial Group"
        description="Integrate life insurance policies into a premium financing services strategy you can present to your clients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:pt-3 mb-16 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Premium, Finance Services</h1>
              <p className="mb-0">
                Many individuals understand the traditional way to design and
                pay for permanent life insurance through cash payments over
                time. Utilizing the same life insurance policies but integrating
                a premium finance services strategy, our firm is uniquely
                positioned to demonstrate a much more advantageous option. In
                comparing these two strategies side-by-side, clients gain the
                knowledge they need to make a well-informed decision.
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
          <div className="max-w-4xl mx-auto">
            <header>
              <h2>FAQs</h2>
            </header>

            <Accordion allowZeroExpanded={true}>
              <AccordionItem
                className="border-b border-solid border-primary-600/50 py-5"
                uuid="1"
              >
                <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                  <p className="heading-five text-gray-600 mb-0">
                    Why should my clients consider Premium Financing?
                  </p>
                  <AccordionItemState>
                    {(state) => {
                      const icon = state.expanded ? "fa-minus" : "fa-plus";
                      return (
                        <i
                          className={`fal ${icon} text-2xl text-primary-400 ml-6 mr-3`}
                        ></i>
                      );
                    }}
                  </AccordionItemState>
                </AccordionItemButton>
                <AccordionItemPanel className="pt-4 animate-fadeIn">
                  <p>
                    Clients usually understand the most common way to purchase
                    life insurance – with cash payments. What many clients do
                    not understand is that an alternative funding method is
                    available using Premium Financing.
                  </p>
                  <p className="mb-0">
                    By comparing the two options side-by-side, clients can make
                    a well-informed decision and understand the benefits of our
                    life insurance carrier-approved funding method. If you
                    decide not to implement the strategy after you analyze both
                    options, at least you will have understood both options are
                    available.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                className="border-b border-solid border-primary-600/50 py-5"
                uuid="2"
              >
                <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                  <p className="heading-five text-gray-600 mb-0">
                    Does my client qualify for the Life Leverage Strategy?
                  </p>
                  <AccordionItemState>
                    {(state) => {
                      const icon = state.expanded ? "fa-minus" : "fa-plus";
                      return (
                        <i
                          className={`fal ${icon} text-2xl text-primary-400 ml-6 mr-3`}
                        ></i>
                      );
                    }}
                  </AccordionItemState>
                </AccordionItemButton>
                <AccordionItemPanel className="pt-4 animate-fadeIn">
                  <p className="mb-0">
                    Any individual or business with a net worth in excess of
                    $5,000,000 (liquid and illiquid assets), with an insurance
                    need and healthy enough to obtain life insurance coverage,
                    may qualify and benefit from Premium Financing.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                className="border-b border-solid border-primary-600/50 py-5"
                uuid="3"
              >
                <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                  <p className="heading-five text-gray-600 mb-0">
                    What Do I Do When I Identify a Client That Qualifiers?
                  </p>
                  <AccordionItemState>
                    {(state) => {
                      const icon = state.expanded ? "fa-minus" : "fa-plus";
                      return (
                        <i
                          className={`fal ${icon} text-2xl text-primary-400 ml-6 mr-3`}
                        ></i>
                      );
                    }}
                  </AccordionItemState>
                </AccordionItemButton>
                <AccordionItemPanel className="pt-4 animate-fadeIn">
                  <p>
                    Once you have identified a client who qualifies, contact our
                    office to discuss the potential opportunity. If premium
                    financing seems suitable, we have a one-page trial
                    application requesting medical and financial information
                    from the client. Our office can provide a preliminary
                    premium finance case design within 48 hours. After which, we
                    will review the case design with you to present the option
                    to the client.
                  </p>
                  <p className="mb-0">
                    If you need in-person or teleconference sales support, one
                    of our team members can assist you. If the client decides to
                    proceed with premium financing, process the financial
                    approval concurrently with our insurance medical approval.
                    When both offers are in place, we assist with the loan
                    documents, collateral assignment forms and book the case in
                    our system to review with you and your client annually.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                className="border-b border-solid border-primary-600/50 py-5"
                uuid="4"
              >
                <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                  <p className="heading-five text-gray-600 mb-0">
                    What if my client already has life insurance in place?
                  </p>
                  <AccordionItemState>
                    {(state) => {
                      const icon = state.expanded ? "fa-minus" : "fa-plus";
                      return (
                        <i
                          className={`fal ${icon} text-2xl text-primary-400 ml-6 mr-3`}
                        ></i>
                      );
                    }}
                  </AccordionItemState>
                </AccordionItemButton>
                <AccordionItemPanel className="pt-4 animate-fadeIn">
                  <p className="mb-0">
                    Suppose your client already has life insurance in place. In
                    that case, we can provide a policy review and analyze the
                    benefits of restructuring your existing policies by
                    utilizing premium financing, creating cash flow savings.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ValueProps />
      <Toolbox />
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
    hero: file(
      relativePath: {
        eq: "3.6 Premium Financing/1.0 Hero - Premium Financing.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
