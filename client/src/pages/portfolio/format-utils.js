import formatCurrency from 'format-currency'

export const primaryCurrency = (value) => {
  return formatCurrency(
    value
  )
}

export const secondaryCurrency = (value, code) => {
  return formatCurrency(
    value,
    { format: '%v %c', code: code }
  )
}

export const cryptoCurrency = (value, code) => {
  return formatCurrency(
    value,
    { format: '%v %c', code: code, maxFraction: 8 }
  )
}
