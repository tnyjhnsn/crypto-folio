import React from 'react'

import Logo from './Logo'
import ErrorPanel from '../common/ErrorPanelContainer'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = key => event => {
    this.setState({ [key]: event.target.value })
  }

  handleKeyPress = target => {
    if (target.charCode === 13) {
      target.preventDefault()
    }
  }

  submitRegister = () => {
    const { register } = this.props
    register(this.state)
  }

  submitLogin = () => {
    const { login } = this.props
    login(this.state)
  }

  render() {
    return (
      <div className="landing">
        <Logo />
        <form className="form">
          <ErrorPanel />
          <input
            className="input"
            id="username"
            autoComplete="username"
            onChange={this.handleInputChange('username')}
            onKeyPress={this.handleKeyPress}
            placeholder="Username..."
            type="text"
            value={this.state.username} />
          <input
            className="input"
            id="password"
            autoComplete="current-password"
            onChange={this.handleInputChange('password')}
            onKeyPress={this.handleKeyPress}
            placeholder="Password..."
            type="password"
            value={this.state.password} />
          <div>
            <button
              className="btn btn-auth"
              type="button"
              onClick={this.submitRegister}>
              REGISTER
            </button>
            <button
              className="btn btn-auth"
              type="button"
              onClick={this.submitLogin}>
              LOGIN
            </button>
          </div>
          <a
            className="mt-8"
            href="https://unsplash.com/@chuttersnap?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer">
            Photo by chuttersnap on unsplash
          </a>
        </form>
      </div>
    )
  }
}

export default Auth
