import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostList from '../components/posts';
import Seo from '../components/seo';
import SectionTitle from '../components/section-title';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location}>
      <Seo title="All Blog Posts" />

      <SectionTitle as="h1">All Blog Posts</SectionTitle>

      <PostList posts={posts} headingLevel="h2" />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date(formatString: "MMMM, DD YYYY")
          description
          title
        }
      }
    }
  }
`;
