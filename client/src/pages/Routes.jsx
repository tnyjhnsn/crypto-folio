import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './auth/AuthContainer'
import Portfolio from './portfolio/PortfolioContainer'
import CreateCoin from './portfolio/CreateCoinContainer'
import EditCoin from './portfolio/EditCoinContainer'

const Routes = () => {
  return (
    <Router>
      <div>
        <section>
          <Route exact path="/" component={Auth} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/create" component={CreateCoin} />
          <Route exact path="/edit/:_id" component={EditCoin} />
        </section>
      </div>
    </Router>
  )
}

export default Routes
