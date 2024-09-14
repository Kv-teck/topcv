import './App.css';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import ProductTop from './components/ProductTop/ProductTop';
import MarketInfo from './Redux/MarketInfo/MarketInfo';
import SearchSection from './Redux/Slider/SearchSection';
import Videobaner from './Redux/Video/Videobaner';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="bg-[url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/bg_header.webp')] bg-[length:100%]">
      <div className=" container mx-auto w-2/3">
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
      <ProductTop/>
    </div>

  );
}

export default App;
