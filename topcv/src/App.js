import './App.css';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import ProductTop from './components/Product/ProductTop/ProductTop';
import TopLeading from './components/Top/TopLeading/TopLeading';
import TopProminent from './components/Top/TopProminent/TopProminent';
import MarketInfo from './Redux/MarketInfo/MarketInfo';
import SearchSection from './Redux/Slider/SearchSection';
import Videobaner from './Redux/Video/Videobaner';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
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
      <TopLeading/>
      <TopProminent/>
    </div>

  );
}

export default App;
