import React from 'react'
import {AiOutlineInstagram, AiOutlineYoutube,AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='w-4/5 m-auto p-10'>
      <div className='md:flex grid grid-cols-2 gap justify-between items-start my-10'>
        <div className='space-y-5 py-5 border-b'>
          <h1 className='text-3xl font-bold'>E-commerce</h1>
          <div className='flex space-x-5'>
            <AiOutlineInstagram size={"1.5rem"}/>
            <AiOutlineWhatsApp size={"1.5rem"}/>
            <AiOutlineYoutube size={"1.5rem"}/>
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <h1>Comapny</h1>
          <a className='text-sm text-gray-400' href="/">About us</a>
          <a className='text-sm text-gray-400' href="/">Contact Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Comapny</h1>
          <a className='text-sm text-gray-400' href="/">About us</a>
          <a className='text-sm text-gray-400' href="/">Contact Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Comapny</h1>
          <a className='text-sm text-gray-400' href="/">About us</a>
          <a className='text-sm text-gray-400' href="/">Contact Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
      </div>
      <div className='border-t py-2'>
        <p>copy &copy;2022 <span className='font-bold'>E-commerce</span> All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer