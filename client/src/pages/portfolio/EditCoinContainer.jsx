import React from 'react'
import { connect } from 'react-redux'
import { refreshCoinsList } from '../../actions/market'
import { editCoin } from '../../actions/auth'

import SaveCoin from './SaveCoin'

class EditCoinContainer extends React.Component {

  saveCoin = ({ _id, name, amount }) => {
    const { saveCoin } = this.props
    saveCoin({ _id, name, amount })
  }

  render() {
    const { coinsList, refreshCoinsList, user: { portfolio } } = this.props
    const { _id } = this.props.match.params
    const coin = portfolio.coins.filter(coin => {
      return coin._id === _id
    })[0]
    return (
      <SaveCoin
        coinsList={coinsList}
        refreshCoinsList={refreshCoinsList}
        saveCoin={this.saveCoin}
        coin={coin} />
    )
  }
}

const mapStateToProps = state => ({
  coinsList: state.auth.coinsList,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  refreshCoinsList: () => dispatch(refreshCoinsList()),
  saveCoin: (coinData) => dispatch(editCoin(coinData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCoinContainer)
