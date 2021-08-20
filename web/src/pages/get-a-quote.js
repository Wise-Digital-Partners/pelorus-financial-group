import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout hideFooter={true} hideHeader={true}>
      <SearchEngineOptimization
        title="Get a Quote | Pelorus Financial | Insurance Brokerage"
        description="Begin your case research with our premium quoting tools, iPipeline and WinFlex Web. They're the most competitive products to fit your client's needs."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section>
        <AniLink fade to="/">
          <i className="close fal fa-times absolute right-6 top-6 text-xl text-white hover:text-white cursor-pointer z-10 transition-all duration-300 ease-linear"></i>
        </AniLink>
        <div className="grid md:grid-cols-2 text-center md:h-screen relative">
          <div className="bg-primary-100 py-12 md:py-16 px-6 md:px-8 lg:px-12 flex justify-center items-center">
            <div className="bg-white py-16 px-8 md:px-6 lg:px-16 h-full flex items-center">
              <div>
                <p className="heading-two">iPipeline</p>
                <p>
                  The iPipeline quote system quickly compares pricing on term
                  and UL and integrates with iGO e-signature technology for
                  application forms.
                </p>
                <ButtonSolid
                  href="https://lifepipe.ipipeline.com/LTSearch.aspx?GAID=7205"
                  text="Launch Ipipeline"
                >
                  Purchase
                </ButtonSolid>
              </div>
            </div>
          </div>
          <div className="bg-primary-600 py-12 md:py-16 px-6 md:px-8 lg:px-12 flex justify-center items-center">
            <div className="bg-white py-16 px-8 md:px-6 lg:px-16 h-full flex items-center">
              <div>
                <p className="heading-two">WinFlex Web</p>
                <p>
                  WinFlex Web is an illustration system that offers agents a
                  single system for multiple carriers. It includes split-dollar,
                  executive compensation, and group carve-out.
                </p>
                <ButtonSolid
                  href="https://www.winflexweb.com/wfw_login.aspx"
                  text="Launch WinFlex"
                >
                  Refinance
                </ButtonSolid>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  }
`;
export default Page;
