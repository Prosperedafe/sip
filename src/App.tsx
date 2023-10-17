import './App.scss';
import Account from './pages/account/Account';
import NotFound from './pages/404';
import SavedItems from './pages/account/saved';
import EditAccount from './pages/account/edit';
import ScrollToTop from './components/ScrollToTop';
import { News } from './pages/news/news';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Suspense';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Suspense, lazy } from 'react';
import { store, persistor } from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Blog = lazy(() => import("./pages/Blog/blog"))
const SignUp = lazy(() => import("./pages/auth/signup"))
const Contact = lazy(() => import("./pages/contact/contact"))
const HomePage = lazy(() => import("./pages/Homepage/HomePage"))
const FruitRecipe = lazy(() => import("./pages/fruitRecipe/recipe"))
const DealOfTheDay = lazy(() => import("./pages/HotDeals/HotDeals"))
const AccountOrders = lazy(() => import("./pages/account/orders"))
const AccountOverview = lazy(() => import("./pages/account/overview"))

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/deals/day' element={<DealOfTheDay />} />
                <Route path='/blog/news' element={<News />} />
                <Route path='/blog/recipe/:fruit' element={<FruitRecipe />} />
                <Route path='/*' element={<NotFound />} />
                <Route element={<Account />}>
                  <Route path='/account/overview/' element={<AccountOverview />} />
                  <Route path='/account/orders' element={<AccountOrders />} />
                  <Route path='/account/saved-items' element={<SavedItems />} />
                  <Route path='/account/edit-profile/:id' element={<EditAccount />} />
                </Route>
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
