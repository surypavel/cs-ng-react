import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const TeacherPageTemplate = ({
  content,
  contentComponent,
  name,
  image,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <h3 className="title is-size-4 has-text-weight-bold is-bold-light">
        {name}
      </h3>
      <div className="has-text-centered my-1">
        <div
          style={{
            width: "240px",
            display: "inline-block",
          }}
        >
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      </div>
      <PageContent content={content} />
    </section>
  );
};

const TeacherPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TeacherPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        name={post.frontmatter.name}
        image={post.frontmatter}
      />
    </Layout>
  );
};

TeacherPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TeacherPage;

export const pageQuery = graphql`
  query TeacherByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
