import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreviewList from "../components/Blog/BlogPostList";
// import BlogPostFeaturedList from "../components/Blog/BlogPostFeaturedList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { mapEdgesToNodes } from "../lib/helpers";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import CallToAction from "../components/Repeating/CTA";
import Newsletter from "../components/Form/Newsletter";

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
    hero: file(relativePath: { eq: "blog/blog-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SearchEngineOptimization
        title="Blog | Hotel Cleaning Services | Hospitality Staffing"
        description="Browse the Hotel Cleaning Services blog here. We're trusted, reliable, and nationwide leaders in hotel cleaning and hospitality staffing."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        backgroundImages={data.hero.childImageSharp.gatsbyImageData}
        textMaxWidth="max-w-xl"
        padding="py-20 md:py-32"
        className="mb-16 md:mb-20"
        backgroundPosition="0% 50%"
      >
        <h1 className="text-white">
          Expert Advice & Tips From The Pelorus Team
        </h1>
        <div className="max-w-[335px]">
          <Newsletter text="Get our blog delivered straight to your inbox. " />
        </div>
      </HeroFullWidth>

      <section className="mb-20 md:mb-32">
        <div className="container">
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewList nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction
        heading={[
          "Let’s Become ",
          <span className="text-primary-500">Partners</span>,
        ]}
        subtext="From short-term help to long-term staff members for your hotel, restaurant, or other establishments, we can get you the staffing you need. Contact us today!"
      />
    </Layout>
  );
};

export default ArchivePage;
