import React from 'react'
import { connect } from 'react-redux'
import { refreshPrices } from '../../actions/market'
import { progress } from '../../actions/progress'
import { deleteCoin } from '../../actions/auth'

import PortfolioSummary from './PortfolioSummary'
import PortfolioList from './PortfolioList'

class PortfolioContainer extends React.Component {
  refreshPrices = () => {
    const { refreshPrices, user: { _id }, dispatch } = this.props
    dispatch(progress())
    refreshPrices(_id)
  }

  deleteCoin = ({ name }) => {
    const { user: { _id }, deleteCoin } = this.props
    deleteCoin({ _id, name })
  }

  render() {
    const { user, isLoading } = this.props
    const { portfolio } = user
    return (
      <div>
        <PortfolioSummary 
          user={user}
          isLoading={isLoading}
          refreshPrices={this.refreshPrices} />
        <PortfolioList
          portfolio={portfolio}
          deleteCoin={this.deleteCoin} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.progress,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  refreshPrices: (username) => dispatch(refreshPrices(username)),
  deleteCoin: (coinData) => dispatch(deleteCoin(coinData))
})

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)
