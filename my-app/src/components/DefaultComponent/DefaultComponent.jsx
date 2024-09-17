import React, { Children } from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const DefaultComponent = () => {
  return (
    <div>
        <HeaderComponent/>
        {Children}
    </div>
  )
}

export default DefaultComponent