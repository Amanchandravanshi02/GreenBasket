import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
const App = () => {
  const isSeller=useLocation().pathname.includes('seller');
  const {showUserLogin}=useAppContext()
  return (
    <div>
      {isSeller?null:<Navbar/>}
      {showUserLogin?<Login/>:null}
      <Toaster/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home/>}/>     
          <Route path='/products' element={<AllProducts/>}/>     
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
