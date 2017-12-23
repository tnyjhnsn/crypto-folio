import React from 'react'

const ErrorPanel = ({ error: { isError, error }, clearError }) => {
  if (!isError) {
    return ''
  }
  return (
    <div className="error-panel" role="alert">
      <span>{error}</span>
      <span
        className="appearance-none text-red px-2"
        onClick={clearError}>
        <i className="fa fa-times-circle fa-2x" />
      </span>
    </div>
  )
}

export default ErrorPanel