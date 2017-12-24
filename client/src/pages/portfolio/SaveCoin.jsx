import React from 'react'
import { Redirect } from 'react-router-dom'

import Header from '../common/Header'

class SaveCoin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cancel: false,
      coin: {
        _id: '',
        name: '',
        amount: ''
      }
    }
  }

  componentWillMount() {
    this.setState({ coin: this.props.coin || this.state.coin })
  }

  getOptions = () => {
    const { coinsList } = this.props
    if (coinsList) {
      return coinsList.map((coin, i) => {
        return (
          <option key={i} value={coin.symbol}>{coin.name}</option>
        )
      })
    }
  }

  handleInputChange = key => event => {
    this.setState({ 
      coin: {
        ...this.state.coin,
        [key]: event.target.value
      }
    })
  }

  handleKeyPress = target => {
    if (target.charCode === 13) {
      target.preventDefault()
      this.submit()
    }
  }

  handleCancel = () => {
    this.setState({ cancel: true })
  }

  getCoinsList = () => {
    const { coinsList, refreshCoinsList } = this.props
    if (!coinsList.length) {
      refreshCoinsList()
    }
  }

  submit = () => {
    const { saveCoin } = this.props
    saveCoin(this.state.coin)
    this.setState({ cancel: true })
  }

  render() {
    if (this.state.cancel) {
      return (
        <Redirect to="/portfolio" />
      )
    }
    const { coin: { name, amount } } = this.state
    return (
      <div>
        <Header />
        <form className="form">
          <div>
            <div className="relative">
              <select
                className="appearance-none input rounded-none"
                id="name"
                onChange={this.handleInputChange('name')}
                value={name}>
                {this.getOptions()}
              </select>
            </div>
            <input
              className="input"
              id="amount"
              autoComplete="amount"
              onChange={this.handleInputChange('amount')}
              onKeyPress={this.handleKeyPress}
              placeholder="Amount..."
              type="text"
              value={amount} />
          </div>
          <div className="flex items-center">
            <span
              className="fab text-blue"
              onClick={this.getCoinsList}>
              <i className="fa fa-cog fa-2x" />
            </span>
            <span
              className="fab text-red"
              onClick={this.handleCancel}>
              <i className="fa fa-times-circle fa-2x" />
            </span>
            <span
              className="fab text-green"
              onClick={this.submit}>
              <i className="fa fa-check-circle fa-2x" />
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default SaveCoin
