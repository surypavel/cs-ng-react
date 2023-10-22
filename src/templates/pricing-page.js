import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const PricingPageTemplate = ({
  image,
  title,
  heading,
  description,
  testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  return (
    <div className="content">
      {
        // TODO Remove
        // <FullWidthImage img={heroImage} title={title} />
        // <section className="section section--gradient">
        //   <div className="container">
        //     <div className="section">
        //       <div className="columns">
        //         <div className="column is-7 is-offset-1">
        //           <h3 className="has-text-weight-semibold is-size-2">
        //             {heading}
        //           </h3>
        //           <p>{description}</p>
        //         </div>
        //       </div>
        //       <div className="columns">
        //         <div className="column is-10 is-offset-1">
        //           <Testimonials testimonials={testimonials} />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        // <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} />
      }
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                {pricing.description && <p className="is-size-5">{pricing.description}</p>}
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PricingPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PricingPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PricingPage;

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
