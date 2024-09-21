import React from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopLeading from '../../components/Top/TopLeading/TopLeading'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import SuperiorTool from '../../components/SuperiorTool/SuperiorTool'
import AchievementAward from '../../components/TopCV/AchievementAward'
import PressAboutTopCV from '../../components/TopCV/PressAboutTopCV'
import SearchSection from '../../Redux/Slider/SearchSection'
import Videobaner from '../../Redux/Video/Videobaner'
import MarketInfo from '../../Redux/MarketInfo/MarketInfo'

export const HomePage = () => {
  return (
    <>
      <div className="bg-[url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/bg_header.webp')] bg-[length:100%]">
        <div className=" container mx-auto">
          <div className='flex'>
            <div>
              <SearchSection />
              <div className="container mx-auto p-8">
                <Videobaner />
              </div>
            </div>
            <MarketInfo />
          </div>
        </div>
      </div>

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
        <PressAboutTopCV />


    </>
  )
}
