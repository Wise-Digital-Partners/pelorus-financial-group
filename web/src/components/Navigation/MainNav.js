import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import Accordion from "./Accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  hideHeader,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 155, placeholder: NONE)
        }
      }
      lightLogo: file(relativePath: { eq: "global/Logo-grayscale.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 155, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  const navigation = {
    about: [
      {
        name: "Our Company",
        href: "/about/",
      },
      {
        name: "Carriers",
        href: "/insurance-carriers/",
      },
      {
        name: "Reviews",
        href: "/reviews/",
      },
    ],
    markets: [
      {
        name: "Markets",
        href: "/market-portfolio/",
      },
      {
        name: "Life Insurance",
        href: "/life-insurance-broker/",
      },
      {
        name: "Annuities",
        href: "/annuity-broker-advisor/",
      },
      {
        name: "Income & Asset Protection",
        href: "/disability-insurance-broker/",
      },
      {
        name: "Asset Based LTC",
        href: "/asset-based-ltc-insurance/",
      },
      {
        name: "Estate Planning",
        href: "/estate-planning-insurance/",
      },
      {
        name: "Premium Financing",
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
        name: "Tools",
        href: "/tools/",
      },
      {
        name: "Get a Quote",
        href: "/get-a-quote/",
      },
      {
        name: "Forms & Applications",
        href: "/forms-applications/",
      },
      {
        name: "Underwriting",
        href: "/underwriting/",
      },
      {
        name: "Contracting",
        href: "/contracting-licensing/",
      },
      {
        name: "Carrier Partners",
        href: "/carrier-partners/",
      },
      {
        name: "Case Status Live",
        href: "/case-status-live/",
      },
      {
        name: "Calculators",
        href: "/calculators/",
      },
    ],
  };

  return (
    <nav
      id="main-navigation"
      className={`py-2 lg:py-3 bg-gray-50 w-full transition duration-300 ease-linear ${
        headerStyle === "overlap" ? "lg:bg-transparent" : "lg:bg-gray-50"
      } ${headerHasBorder && "border-b border-solid border-gray-300"} ${
        offcanvasOpen ? "" : ""
      } ${scrolled && "!fixed !bg-white top-0 left-0 w-full z-50"} ${
        hideHeader && "!hidden"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container relative flex justify-between items-center">
        {/* <div className="flex-auto flex items-center lg:hidden">
          <a href="tel:310-831-0587" className="group z-30">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-30"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                className={`fill-current group-hover:text-primary-800 transition-colors duration-300 ease-linear transform ${
                  headerStyle === "overlap"
                    ? "text-primary-400"
                    : "text-primary-400"
                } ${offcanvasOpen || scrolled ? "text-primary-400" : null}`}
              />
            </svg>
          </a>
        </div> */}

        <div className="flex-auto flex items-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`logo-initial ${scrolled && "hidden"}`}>
              <div className="hidden lg:block">
                <GatsbyImage
                  image={initialLogo}
                  alt="Pelorus Financial Group Logo"
                  className="w-[125px] md:w-[155px]"
                />
              </div>
              <div className="lg:hidden">
                <GatsbyImage
                  image={stickyLogo}
                  alt="Pelorus Financial Group Logo"
                  className="w-[125px] md:w-[155px]"
                />
              </div>
            </div>
            <div className={`logo-fixed hidden ${scrolled && "!block"}`}>
              <GatsbyImage
                image={stickyLogo}
                alt="Pelorus Financial Group Logo"
                className="w-[125px] md:w-[155px]"
              />
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:mr-8"
          >
            <li className={`group relative ${subMenuHovering2 && "active"}`}>
              <AniLink
                fade
                to="/about/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
                className={`font-body font-semibold pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                About Us
              </AniLink>
              <ul className="absolute top-0 bg-primary-800 shadow-3xl flex flex-col space-y-2 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 px-4 pt-5 pb-8 z-10 transition-all duration-300 ease-linear">
                {navigation.about.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-body font-semibold text-white hover:text-white px-6 bg-transparent hover:bg-gray-50/40"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering1 && "active"}`}>
              <AniLink
                fade
                to="/market-portfolio/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
                className={`font-body font-semibold pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Markets
              </AniLink>
              <ul className="absolute top-0 bg-primary-800 shadow-3xl flex flex-col space-y-2 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 px-4 pt-5 pb-8 z-10 transition-all duration-300 ease-linear">
                {navigation.markets.slice(1).map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-body font-semibold text-white hover:text-white px-6 bg-transparent hover:bg-gray-50/40"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering3 && "active"}`}>
              <AniLink
                fade
                to="/tools/"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
                className={`font-body font-semibold pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Tools
              </AniLink>
              <ul className="absolute top-0 bg-primary-800 shadow-3xl flex flex-col space-y-2 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 px-4 pt-5 pb-8 z-10 transition-all duration-300 ease-linear">
                {navigation.tools.slice(1).map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="relative block font-body font-semibold text-white hover:text-white px-6 bg-transparent hover:bg-gray-50/40"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="group">
              <AniLink
                fade
                to="/blog/"
                className={`font-body font-semibold ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Blog
              </AniLink>
            </li>
          </ul>

          <div className="hidden lg:inline-flex lg:items-center lg:space-x-3">
            <ButtonGhost
              modal="modal-contact"
              altStyle={headerStyle === "overlap" && true}
              text="Contact"
              className={`min-w-0 ghost ${
                scrolled && "lg:text-gray-900 hover:lg:text-white"
              }`}
            />
            <ButtonSolid href="/get-a-quote/" text="Run a Quote" />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div className="max-w-[258px] mx-auto">
                <ul
                  id="navigation-mobile"
                  className="flex flex-col space-y-7 mb-12 text-center"
                >
                  <li>
                    <AniLink
                      fade
                      to="/dialysis-services"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-2xl text-white hover:text-white font-bold no-underline"
                    >
                      Dialysis
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/nephrology"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-2xl text-white hover:text-white font-bold no-underline"
                    >
                      Nephrology
                    </AniLink>
                  </li>
                  <li>
                    <Accordion title="About">
                      {navigation.about.map((item) => (
                        <li key={item.name}>
                          <AniLink
                            fade
                            to={item.href}
                            onKeyDown={clickHandler}
                            onClick={clickHandler}
                            className="font-body text-white uppercase tracking-widest no-underline"
                          >
                            {item.name}
                          </AniLink>
                        </li>
                      ))}
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="about">
                      {navigation.about.map((item) => (
                        <li key={item.name} className="whitespace-nowrap">
                          <AniLink
                            fade
                            to={item.href}
                            onKeyDown={clickHandler}
                            onClick={clickHandler}
                            className="font-body text-white uppercase tracking-widest no-underline"
                          >
                            {item.name}
                          </AniLink>
                        </li>
                      ))}
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="tools">
                      {navigation.tools.map((item) => (
                        <li key={item.name}>
                          <AniLink
                            fade
                            to={item.href}
                            onKeyDown={clickHandler}
                            onClick={clickHandler}
                            className="font-body text-white uppercase tracking-widest no-underline"
                          >
                            {item.name}
                          </AniLink>
                        </li>
                      ))}
                    </Accordion>
                  </li>
                </ul>

                <div className="grid gap-y-4">
                  <ButtonGhost
                    modal="modal-contact"
                    altStyle={true}
                    text="Contact"
                    className="min-w-0"
                  />
                  <ButtonSolid href="/get-a-quote/" text="Run a Quote" />
                </div>
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
