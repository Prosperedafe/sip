import './App.scss';
import { Navbar } from './components/Navbar';
import HomePage from './pages/Homepage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/contact';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import AccountOverview from './pages/account/overview';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account/overview' element={<AccountOverview />} />
        <Route path='/account/saved' element={<SignUp />} />
        <Route path='/account/orders' element={<SignUp />} />
        <Route path='/account/management' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
