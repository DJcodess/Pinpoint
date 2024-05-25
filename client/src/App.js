import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './routes/SignUp.js';
import Login from './routes/Login.js';
import Home from './routes/Home.js';
import Ecommerce from './routes/Ecommerce';
import Dashboard from './routes/Dashboard';
import { useCookies } from 'react-cookie';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

	// const [cookie] = useCookies(['token']);
  const isUserLoggedIn = !!localStorage.getItem('user')
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=<Home />
          />
          <Route
            path='/signup'
            element=<SignUp />
          />
          <Route
            path='/login'
            element=<Login />
          />
          <Route
            path='/ecommerce'
            element=<Ecommerce />
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

