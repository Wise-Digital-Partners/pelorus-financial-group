import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";
import Newsletter from "../Form/Newsletter";
import nestLogo from "../../images/global/Nest Logo.svg";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo-grayscale.png" }) {
        publicURL
      }
    }
  `);

  const navigation = {
    markets: [
      {
        name: "Life Insurance ",
        href: "/life-insurance/",
      },
      {
        name: "Annuities",
        href: "/annuities/",
      },
      {
        name: "Income and Asset Protection",
        href: "/disability-insurance/",
      },
      {
        name: "Asset Based LTC",
        href: "/asset-based-ltc-insurance/",
      },
      {
        name: "Estate Planning",
        href: "/asset-based-ltc-insurance/",
      },
      {
        name: "Premium Financing ",
        href: "/premium-finance-services/",
      },
      {
        name: "Business Succession",
        href: "/business-succession/",
      },
      {
        name: "Wealth Succession",
        href: "/wealth-accumulation-insurance/",
      },
    ],
    tools: [
      {
        name: "Quotes",
        href: "/get-a-quote/",
      },
      {
        name: "Forms & Applications",
        href: "/forms-applications/",
      },
      {
        name: "Contracting ",
        href: "/contracting-licensing/",
      },
      // {
      //   name: "LifeLine Applications",
      //   href: "/lifeline-applications/",
      // },
      {
        name: "Carrier Partners ",
        href: "/carrier-partners/",
      },
      {
        name: "Underwriting ",
        href: "/underwriting/",
      },
      {
        name: "Case Status Live",
        href: "/case-status-live/",
      },
    ],
  };

  return (
    <>
      <footer
        className={`bg-primary-800 pt-14 lg:pt-20 pb-12 lg:pb-6 text-center lg:text-left ${
          hideFooter && "hidden"
        }`}
      >
        <div className="container">
          <div className="grid md:grid-cols-12 lg:justify-between space-y-10 lg:space-y-0 lg:space-x-8 mb-20 lg:mb-16">
            <div className="lg:col-start-1 md:col-span-4">
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Pelorus Financial Group Logo"
                  width="200"
                  className="mx-auto lg:mx-0 mb-14 lg:mb-10"
                />
              </AniLink>

              <Newsletter />
            </div>

            <div className="lg:col-end-13 md:col-span-7">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-10 lg:space-y-0 lg:space-x-12">
                <div>
                  <div className="font-heading text-lg text-white font-medium tracking-wide mb-2.5">
                    Markets
                  </div>

                  <ul className="flex flex-col">
                    {navigation.markets.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-gray-100 hover:text-white no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-heading text-lg text-white font-medium tracking-wide mb-2.5">
                    Tools
                  </div>

                  <ul className="flex flex-col">
                    {navigation.tools.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-gray-100 hover:text-white no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="font-heading text-lg text-white font-medium tracking-wide mb-2.5">
                    Contact
                  </div>

                  <ul className="flex flex-col">
                    <li>
                      <a
                        href="https://goo.gl/maps/Wi83ywdPsdLQwdrF8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-100 hover:text-white no-underline"
                      >
                        162 S. Rancho Santa Fe Rd. Ste F4
                        <br /> Encinitas, CA 92024
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:760-230-5790"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-100 hover:text-white no-underline"
                      >
                        (760) 230-5790
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
            <div className="lg:flex lg:items-center mb-2 lg:mb-0">
              <ul className="flex items-center flex-col lg:flex-row flex-wrap space-y-1 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start">
                <li className="text-sm text-gray-50">
                  © {getYear()} Pelorus Financial Group
                </li>
                <li className="text-sm">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-primary-100 no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <li className="text-sm">
                  <AniLink
                    fade
                    to="/terms-of-use/"
                    className="text-gray-50 hover:text-primary-100 no-underline"
                  >
                    Terms of Use
                  </AniLink>
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-50 w-full md:w-auto">
              <a
                className="no-underline text-gray-50 hover:text-primary-100 flex items-center justify-center lg:justify-start space-x-1"
                href="https://www.wisedigitalpartners.com/affordable-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by</span> <img src={nestLogo} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
