import './App.scss';
import Blog from './pages/Blog/blog';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Account from './pages/account/Account';
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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store/store';
import DealOfTheDay from './pages/HotDeals/HotDeals';
import { News } from './pages/news/news';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              <Route path='/signup' element={<SignUp />} />
              <Route path='/deals/day' element={<DealOfTheDay />} />
              <Route path='/blog/news' element={<News />} />
              <Route path='/blog/recipe/:fruit' element={<FruitRecipe />} />
              <Route element={<Account />}>
                <Route path='/account/overview/' element={<AccountOverview />} />
                <Route path='/account/orders' element={<AccountOrders />} />
                <Route path='/account/saved-items' element={<SavedItems />} />
                <Route path='/account/edit-profile/:id' element={<EditAccount />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
