import React, { useContext, useEffect } from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopLeading from '../../components/Top/TopLeading/TopLeading'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import SuperiorTool from '../../components/SuperiorTool/SuperiorTool'
import AchievementAward from '../../components/TopCV/AchievementAward'
import PressAboutTopCV from '../../components/TopCV/PressAboutTopCV'
import SearchSection from '../../Redux/Slider/SearchSection'
import Videobaner from '../../Redux/Video/Videobaner'
import MarketInfo from '../../Redux/MarketInfo/MarketInfo'
import BuildwithTopCV from '../../components/TopCV/BuildwithTopCV'
import Context from '../../context/context'
import { ACTION } from '../../context/reducer'

export const HomePage = () => {
  const { state, dispatch } = useContext(Context);

  const fetchData = async () => {
    dispatch({ type: ACTION.SHOW_LOADING });
    try {
      // Giả lập yêu cầu API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Thêm logic lấy dữ liệu ở đây
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: ACTION.HIDE_LOADING });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      <BuildwithTopCV />
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
