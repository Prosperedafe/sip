import './App.scss';
import { Navbar } from './components/Navbar';
import HomePage from './pages/Homepage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/contact';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
