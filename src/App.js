import Header from './components/header'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import Footer from './components/footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Login from './pages/login'
import Register from './pages/register'
import Cart from './pages/cart'
import {useDispatch, useSelector} from 'react-redux'
import useApi from './hooks/useApi'

import {setCategories} from './redux/categorySlice'


function App() {
  const categoryState = useSelector(state => state.categoryState)
  const api = useApi()
  const dispatch = useDispatch()

  console.log('>> APP CATEGORY STATE', categoryState)


  if (categoryState.categories === null) {
    // TODO kategoriler yüklenmediği için kategorileri API'den al
    api.get('shop/taxons')
      .then(response => {
        console.log('>> RESP', response)

        dispatch(setCategories({
          categories: response.data,
        }))
      })
      .catch(err => {
        console.log('>> ERR', err)
      })
  }


  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="category/:taxon_code" element={<Category />} />

          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />

          <Route path="cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App