import React from 'react'
import { connect } from 'react-redux'
import { refreshCoinsList } from '../../actions/market'
import { addCoin } from '../../actions/auth'
import { progress } from '../../actions/progress'

import SaveCoin from './SaveCoin'

class CreateCoinContainer extends React.Component {

  saveCoin = ({ name, amount }) => {
    const { user: { _id }, saveCoin } = this.props
    saveCoin({ _id, name, amount })
  }

  render() {
    const { coinsList, refreshCoinsList, progress, isLoading } = this.props
    return (
      <SaveCoin
        progress={progress}
        isLoading={isLoading}
        coinsList={coinsList}
        refreshCoinsList={refreshCoinsList}
        saveCoin={this.saveCoin} />
    )
  }
}

const mapStateToProps = state => ({
  coinsList: state.auth.coinsList,
  user: state.auth.user,
  isLoading: state.progress
})

const mapDispatchToProps = dispatch => ({
  refreshCoinsList: () => dispatch(refreshCoinsList()),
  saveCoin: (coinData) => dispatch(addCoin(coinData)),
  progress: () => dispatch(progress())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoinContainer)
