import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterKeyword from './components/Footer/FooterKeyword';
import FooterMain from './components/Footer/FooterMain';
import BackTop from './components/Footer/BackTop';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import { HomePage } from './pages/HomePage/HomePage';
import Login from './services/Login';
import Register from './services/Register';


function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <main>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

      <footer>
        <FooterKeyword />
        <FooterMain />
        <BackTop />
      </footer>
    </div>

  );
}

export default App;