import React from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopLeading from '../../components/Top/TopLeading/TopLeading'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import SuperiorTool from '../../components/SuperiorTool/SuperiorTool'

export const HomePage = () => {
  return (
    <div>
      <div className='bg-gray-100'>
        <ProductTop />
      </div>
      <TopLeading />
      <TopProminent />
      <div className='bg-gray-100'>
        <SuperiorTool />
      </div></div>
  )
}
