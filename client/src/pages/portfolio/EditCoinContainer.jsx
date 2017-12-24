import React from 'react'
import { connect } from 'react-redux'
import { refreshCoinsList } from '../../actions/market'
import { editCoin } from '../../actions/auth'
import { progress } from '../../actions/progress'

import SaveCoin from './SaveCoin'

class EditCoinContainer extends React.Component {

  saveCoin = ({ _id, name, amount }) => {
    const { saveCoin } = this.props
    saveCoin({ _id, name, amount })
  }

  render() {
    const { coinsList, refreshCoinsList, user: { portfolio }, progress, isLoading } = this.props
    const { _id } = this.props.match.params
    const coin = portfolio.coins.filter(coin => {
      return coin._id === _id
    })[0]
    return (
      <SaveCoin
        progress={progress}
        isLoading={isLoading}
        coinsList={coinsList}
        refreshCoinsList={refreshCoinsList}
        saveCoin={this.saveCoin}
        coin={coin} />
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
  saveCoin: (coinData) => dispatch(editCoin(coinData)),
  progress: () => dispatch(progress())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCoinContainer)
