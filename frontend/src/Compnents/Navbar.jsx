import React from 'react'
import '../CSS/navbar.css'
export default function Navbar() {
  return (
    <div className='navbar flex  text-white p-6 justify-between items-center' >
    <div className='logo text-3xl pl-6 font-bold font-sans max-sm:text-2xl'>
  
    Coding Craft

    </div>
    <div className='flex  text-xl  w-1/3  justify-between font-bold max-lg:hidden' style={{color: 'yellow'
}}>
        <div className=' hover:text-blue-400 text-yellow-100'>
            home
        </div>
        <div className=' hover:text-blue-400'>
            Services
        </div>
        <div className=' hover:text-blue-400'>
            About
        </div>
        <div className=' hover:text-blue-400 '>
          Contact
        </div>
    </div>
    <div className=' text-blue-400 w-36 h-10 flex bg-white justify-center items-center max-lg:hidden'>
      Get a Quote
    </div>
    <div className='sidebar-btn mr-6   h-10 w-10 justify-center items-center bg-blue-300 hidden max-lg:flex'>
    <i class="fa-solid fa-bars text-lg text-white"></i>

    </div>
      
    </div>
  )
}
