import React from 'react'
import { primaryCurrency, secondaryCurrency, cryptoCurrency } from './format-utils'
import { Link } from 'react-router-dom'

import Header from '../common/Header'

const PortfolioSummary = ({ user, isLoading, refreshPrices }) => {
  const { username, portfolio: { totalAUD, totalUSD, totalBTC }} = user
  const refreshIcon = [
    'fa',
    `fa-${isLoading ? 'spinner fa-pulse' : 'refresh'}`,
    'fa-2x'
  ].join(' ')
  return (
    <div>
      <Header />
      <span className="welcome mb-4">Welcome, {username}</span>
      <div className="portfolio-container">
        <div className="coin-container">
          <div className="coin-list">
            <div className="coin text-5xl">{primaryCurrency(totalAUD)}</div>
            <div className="coin">{secondaryCurrency(totalUSD, 'USD')}</div>
            <div className="coin">{cryptoCurrency(totalBTC, 'BTC')}</div>
          </div>
          <div className="flex flex-col">
            <span
              className="fab text-blue"
              onClick={refreshPrices}>
              <i className={refreshIcon} />
            </span>
            <Link to="/create" className="fab">
              <i className="fa fa-plus-circle fa-3x text-green" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSummary
