import React from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopLeading from '../../components/Top/TopLeading/TopLeading'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import SuperiorTool from '../../components/SuperiorTool/SuperiorTool'
import AchievementAward from '../../components/TopCV/AchievementAward'
import PressAboutTopCV from '../../components/TopCV/PressAboutTopCV'

export const HomePage = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <ProductTop />
      </div>
      <TopLeading />
      <TopProminent />
      <div className='bg-gray-100'>
        <SuperiorTool />
      </div>
      <div className="bg-[url('https://static.topcv.vn/v4/image/welcome/home/impressive_numbers_cover_new.png')] bg-[length:100%]">
        <AchievementAward />
      </div >
      <PressAboutTopCV/>
    </>
  )
}
