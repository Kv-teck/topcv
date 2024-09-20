import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterKeyword from './components/Footer/FooterKeyword';
import FooterMain from './components/Footer/FooterMain';
import HeaderComponent from './components/Headercomponent/HeaderComponent';
import STATE from './hooks/context/initState';
import { HomePage } from './pages/HomePage/HomePage';

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

      <main>
        <Routes>
          <Route path='/' Component={HomePage} />
        </Routes>
      </main>

      <footer>
        <FooterKeyword />
        <FooterMain />
      </footer>
    </div>
    </Provider>

  );
}

export default App;
