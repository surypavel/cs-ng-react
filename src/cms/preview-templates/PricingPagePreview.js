import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreview = ({ entry, getAsset }) => {
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <PricingPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      fullImage={getAsset(entry.getIn(['data', 'full_image']))}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  )
}

PricingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PricingPagePreview
