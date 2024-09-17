import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

function App() {


  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Pages = route.page;
            const Layout = routes.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                <Pages/>
                </Layout>
              } />
            );
          })}

        </Routes>
      </Router>
    </div>
  )
}

export default App