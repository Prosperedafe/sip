import './App.scss';
import Blog from './pages/Blog/blog';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Contact from './pages/contact/contact';
import HomePage from './pages/Homepage/HomePage';
import SavedItems from './pages/account/saved';
import EditAccount from './pages/account/edit';
import FruitRecipe from './pages/fruitRecipe/recipe';
import ScrollToTop from './components/ScrollToTop';
import AccountOrders from './pages/account/orders';
import AccountOverview from './pages/account/overview';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account/overview' element={<AccountOverview />} />
          <Route path='/account/saved' element={<SignUp />} />
          <Route path='/account/orders' element={<AccountOrders />} />
          <Route path='/account/management' element={<SignUp />} />
          <Route path='/account/saved-items' element={<SavedItems />} />
          <Route path='/account/edit-profile/:id' element={<EditAccount />} />
          <Route path='blog/recipe/:fruit' element={<FruitRecipe />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
