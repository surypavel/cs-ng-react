import React from 'react'
import PropTypes from 'prop-types'
import { TeacherPageTemplate } from '../../templates/teacher'

const TeacherPreview = ({ entry, widgetFor }) => {
  return (
    <TeacherPageTemplate
      content={widgetFor('body')}
      name={entry.getIn(['data', 'name'])}
      image={{ image: entry.getIn(['data', 'image']) }}
    />
  )
}

TeacherPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeacherPreview
