import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterKeyword from './components/Footer/FooterKeyword';
import FooterMain from './components/Footer/FooterMain';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import { HomePage } from './pages/HomePage/HomePage';
import Login from './services/Login';


function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <main>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/login' Component={Login} />
        </Routes>
      </main>

      <footer>
        <FooterKeyword />
        <FooterMain />
      </footer>
    </div>

  );
}

export default App;