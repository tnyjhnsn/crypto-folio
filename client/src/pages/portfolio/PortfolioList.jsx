import React from 'react'
import { Link } from 'react-router-dom'
import { cryptoCurrency, secondaryCurrency } from './format-utils'

class PortfolioList extends React.Component {

  deleteCoin = (coin) => (event) => {
    const { deleteCoin } = this.props
    deleteCoin(coin)
  }

  render() {
    const { portfolio } = this.props
    const coinList = portfolio.coins.map((coin, i) => {
      const { _id, name, amount, AUD, USD, BTC } = coin
      return (
        <div key={i} className="portfolio-container">
          <div className="coin-container">
            <div className="coin-list">
              <div className="coin font-normal text-2xl">{cryptoCurrency(amount, name)}</div>
              <div className="coin coin-alt">{secondaryCurrency(AUD, 'AUD')}</div>
              <div className="coin coin-alt">{secondaryCurrency(USD, 'USD')}</div>
              <div className="coin coin-alt">{cryptoCurrency(BTC, 'BTC')}</div>
            </div>
            <div className="flex flex-col">
              <span
                className="appearance-none py-2 px-4"
                onClick={this.deleteCoin(coin)}>
                <i className="fa fa-minus-circle fa-2x text-red" />
              </span>
              <Link to={`/edit/${_id}`} className="appearance-none py-2 px-4">
                <i className="fa fa-pencil fa-3x text-blue" />
              </Link>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {coinList}
      </div>
    )
  }
}

export default PortfolioList
