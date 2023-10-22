import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const entryTeachers = entry.getIn(['data', 'teachers'])
  const teachers = entryTeachers ? entryTeachers.toJS() : []
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      teachers={teachers}
      content={widgetFor('body')} />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
