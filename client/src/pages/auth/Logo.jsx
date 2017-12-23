import React from 'react'
import pic from '../../images/rocket.png'

import AppTitle from '../common/AppTitle'

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="logo logo-moon mt-8">TO THE MOON</div>
      <img src={pic} className="w-16 mt-4 mb-8" alt="rocket" />
      <AppTitle />
    </div>
  )
}

export default Logo
