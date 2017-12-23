import React from 'react'
import { connect } from 'react-redux'
import { refreshCoinsList } from '../../actions/market'
import { addCoin } from '../../actions/auth'

import SaveCoin from './SaveCoin'

class CreateCoinContainer extends React.Component {

  saveCoin = ({ name, amount }) => {
    const { user: { _id }, saveCoin } = this.props
    saveCoin({ _id, name, amount })
  }

  render() {
    const { coinsList, refreshCoinsList } = this.props
    return (
      <SaveCoin
        coinsList={coinsList}
        refreshCoinsList={refreshCoinsList}
        saveCoin={this.saveCoin} />
    )
  }
}

const mapStateToProps = state => ({
  coinsList: state.auth.coinsList,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  refreshCoinsList: () => dispatch(refreshCoinsList()),
  saveCoin: (coinData) => dispatch(addCoin(coinData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoinContainer)
