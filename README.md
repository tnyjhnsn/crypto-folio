# crypto-folio
*Simple app for viewing your cryptocurrency portfolio balances.*

Production version at: http://www.tosp.net.au:3008

Given that there is no identifying data to match you with a portfolio, there is just a simple username/password control. However, if you forget your credentials, you will have to make a new account and reenter data.

Market rates expressed as AUD, USD, and BTC. Displayed data is sorted by highest value in the portfolio. Sometimes it takes a few moments to load data from `cryptocompare.com`.

When you press the `+` to create a new crypto entry, you then have to select the `gear` icon in order to load the known cryptocurrencies for the dropdown selector. The list will then be memorised for the duration of that logged-in session.

Notable techs used for this project are React, Redux, Express, Mongoose, Node.js Socket.io, Passport, and Tailwinds css.

TODOs for Version 2.0:

1. Replace gear icon with automated download of coin list if it is not already available.
2. Improve layout for non-mobile screens and a more compact version for mobile display.
3. Include some nice coin images
4. Allow override of market value for coins where market value is deemed to be incorrect (eg. cashcoin)
