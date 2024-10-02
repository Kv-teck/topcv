import { Route, Routes } from 'react-router-dom';
import FooterKeyword from './components/Footer/FooterKeyword';
import FooterMain from './components/Footer/FooterMain';
import BackTop from './components/Footer/BackTop';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import { HomePage } from './pages/HomePage/HomePage';
import Login from './services/Login';
import Register from './services/Register';
import { Job } from './pages/Job/Job';
import STATE from './context/initState';
import { Provider } from './context/context';
import { useReducer} from 'react';
import reducer from './context/reducer';
import Profile from './members/Profile';

function App() {
  const DATA = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) : STATE;
  const [state, dispatch] = useReducer(reducer, DATA);
  return (
    <Provider value={{ state, dispatch }}>
      {/* Hiệu ứng Loading */}
      <div id="spinner" className={`fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 ${state.isLoading ? 'block' : 'hidden'} z-50`}>
        <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="App">
        <HeaderComponent />
        <main>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/job' Component={Job} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
        <footer>
          <FooterKeyword />
          <FooterMain />
          <BackTop />
        </footer>
      </div>
    </Provider>
  );
}

export default App;