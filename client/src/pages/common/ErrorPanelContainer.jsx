import React from 'react'
import { connect } from 'react-redux'
import { clearError } from '../../actions/error'

import ErrorPanel from './ErrorPanel'

const ErrorPanelContainer = ({ error, clearError }) => {
  return (
    <ErrorPanel error={error} clearError={clearError} />
  )
}

const mapStateToProps = state => ({
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError())
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPanelContainer)