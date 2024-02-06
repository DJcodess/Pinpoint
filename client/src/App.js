import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './routes/FormPage.js';
import Home from './routes/Home.js';
import Ecommerce from './routes/Ecommerce';


function App() {
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        <Routes>
          <Route
            path='*'
            element=<Home />
          />
          <Route
            path='/formpage'
            element=<FormPage />
          />
          <Route
            path='/ecommerce'
            element=<Ecommerce />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

