import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useShop from '../Pages/ShopContext'

const Header = () => {
  // const [cart, setCart] = useState(5)

  const {products} = useShop()
  return (
    <div className='header'>
        <Link to='/' className='logo'>E-Commerce</Link>
        <div className="items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <Link to="/cart" className='cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>            
      <span>+{products.length}</span></Link>
    </div>
  )
}

export default Header