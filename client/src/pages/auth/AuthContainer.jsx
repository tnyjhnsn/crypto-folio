import React from 'react'
import { connect } from 'react-redux'
import { register, login } from '../../actions/auth'
import { Redirect } from 'react-router-dom'

import Auth from './Auth'

const AuthContainer = ({ register, login, auth, error }) => {
  if (auth.isLoggedIn) {
    return <Redirect to="/portfolio" />
  }
  return (
    <Auth
      register={register}
      login={login} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  register: (credentials) => dispatch(register(credentials)),
  login: (credentials) => dispatch(login(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
