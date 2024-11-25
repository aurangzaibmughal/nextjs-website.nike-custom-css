import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>NIKE</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shoes">Shoes</Link>
            <Link href="/contact">Contact</Link>
            <FaShoppingCart style={{color:'black' , fontSize: '20px'}}/>
        </nav>
    </header>
  )
}

export default Header