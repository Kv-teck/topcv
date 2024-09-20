import './App.css';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import STATE from './hooks/context/initState';
import { HomePage } from './pages/HomePage/HomePage';
import MarketInfo from './Redux/MarketInfo/MarketInfo';
import SearchSection from './Redux/Slider/SearchSection';
import Videobaner from './Redux/Video/Videobaner';
import Login from './services/Login';
import { useReducer, useState } from 'react';
import reducer from './hooks/context/reducer';
import { Provider } from './hooks/context/context';

function App() {
  const DATA = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")): STATE;
  const [state,dispatch] = useReducer(reducer,DATA);
  return (
    <Provider value={{state,dispatch}}>
    <div id="spinner" className={(state.isLoading?"show ":" ")+ "bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"}>
      <div class="spinner-border text-primary" role="status"></div>
  </div>
    <div className="App">
      <Login/>
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
    <main>
      <HomePage/>
    </main>
      
    </div>
    </Provider>

  );
}

export default App;
