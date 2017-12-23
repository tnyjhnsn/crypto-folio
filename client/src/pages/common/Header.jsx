import React from 'react'
import pic from '../../images/rocket.png'

import AppTitle from './AppTitle'

const Header = () => {
  return (
    <div className="heading">
      <AppTitle />
      <img src={pic} className="w-8 ml-2" alt="rocket" />
    </div>
  )
}

export default Header
