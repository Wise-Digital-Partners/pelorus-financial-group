import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

import downloadFile from "../downloads/CarrierRoster Pelorus.pdf";

const Page = ({ data }) => {
  const carriers = [
    {
      logo: data.carrier02.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier03.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier04.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier06.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier07.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier08.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier11.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier13.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier14.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier15.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier16.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier17.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier18.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier20.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier21.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier22.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier23.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier24.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier25.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier27.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier28.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier29.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier30.childImageSharp.gatsbyImageData,
    },
    {
      logo: data.carrier31.childImageSharp.gatsbyImageData,
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Insurance Carrier Partners | Pelorus Financial Group"
        description="Get connected with a full portfolio of top-rated carriers for life insurance, annuities, disability, and long-term care."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-12 md:pt-16 mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-4xl mx-auto mb-14 md:mb-18 text-center">
            <h1>Carrier Partners</h1>
            <p>
              When you partner with Pelorus, you get connected with a full
              portfolio of top-rated carriers for life insurance, annuities,
              disability, and long-term care.
            </p>
            <ButtonGhost
              href={downloadFile}
              outboundLink={true}
              text={[
                "View Carriers",
                <i className="far fa-external-link ml-2"></i>,
              ]}
            />
          </header>

          <header className="text-center mb-6 md:mb-10">
            <h3 className="text-base uppercase tracking-widest font-normal text-black/30">
              Our Premium Partners
            </h3>
          </header>

          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 md:gap-y-10 md:gap-x-5 lg:gap-x-10">
            {carriers.map((carrier, i) => {
              return (
                <div key={i}>
                  <GatsbyImage image={carrier.logo} />
                </div>
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
    carrier02: file(relativePath: { eq: "Carriers/carrier 02.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier03: file(relativePath: { eq: "Carriers/carrier 03.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier04: file(relativePath: { eq: "Carriers/carrier 04.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier06: file(relativePath: { eq: "Carriers/carrier 06.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier07: file(relativePath: { eq: "Carriers/carrier 07.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier08: file(relativePath: { eq: "Carriers/carrier 08.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier11: file(relativePath: { eq: "Carriers/carrier 11.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier13: file(relativePath: { eq: "Carriers/carrier 13.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier14: file(relativePath: { eq: "Carriers/carrier 14.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier15: file(relativePath: { eq: "Carriers/carrier 15.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier16: file(relativePath: { eq: "Carriers/carrier 16.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier17: file(relativePath: { eq: "Carriers/carrier 17.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier18: file(relativePath: { eq: "Carriers/carrier 18.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier20: file(relativePath: { eq: "Carriers/carrier 20.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier21: file(relativePath: { eq: "Carriers/carrier 21.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier22: file(relativePath: { eq: "Carriers/carrier 22.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier23: file(relativePath: { eq: "Carriers/carrier 23.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier24: file(relativePath: { eq: "Carriers/carrier 24.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier25: file(relativePath: { eq: "Carriers/carrier 25.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier27: file(relativePath: { eq: "Carriers/carrier 27.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier28: file(relativePath: { eq: "Carriers/carrier 28.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier29: file(relativePath: { eq: "Carriers/carrier 29.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier30: file(relativePath: { eq: "Carriers/carrier 30.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
    carrier31: file(relativePath: { eq: "Carriers/carrier 31.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 193)
      }
    }
  }
`;
export default Page;
