import React from 'react'
import {AiFillHeart , AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='w-11/12 xl:w-4/5 m-auto flex justify-between py-5'>
      <h1 className='text-2xl font-semibold'>E-<span className='text-rose-400'>Commerce</span></h1>
      <div>
        <ul className='flex space-x-8 text-base hidden md:flex'>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
      <div className='flex space-x-8'>
        <AiOutlineSearch size={"1.5rem"}/>
        <AiFillHeart size={"1.5rem"}/>
        <AiOutlineShoppingCart size={"1.5rem"}/>
      </div>
    </nav>
  )
}

export default Nav