import React from 'react'
import Header from './components/Header'
import Home from './Pages/home'
import About from './Pages/about'
import { Route , Routes } from 'react-router-dom'
import Contact from './Pages/contact'
import Cart from './Pages/cart'
import './style.css'


const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  )
}

export default App