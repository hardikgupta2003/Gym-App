import React from 'react'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-start sm:gap-[123px] sm:mt-[32px] px-[20px]'>
      <Link to='/'> 
      <img src={logo} alt="logo" className='w-[48px] h-[48px] my-0 mx-[20px]' />
      </Link>

      <div className="flex gap-[40px] font-sans text-2xl  text-[darkred]">
        <Link to="/" className='  hover:border-b-[3px] hover:border-b-orangee'>
        Home
        </Link>

        <a href="#exercise" className='  hover:border-b-[3px] hover:border-b-orangee'>Exercises</a>
      </div>
     
    </div>
  )
}

export default Navbar
