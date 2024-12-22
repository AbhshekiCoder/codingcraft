import React from 'react'
import '../CSS/navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/bg.png'
export default function Navbar() {
  function sidebar(){
  
    document.querySelector('.sidebar').style.display = "block";
  }
  function sidebar_modal(){
    document.querySelector('.sidebar').style.display = "none";

  }
  return (
    <>

  
    <div className='navbar flex  text-white p-6 justify-between items-center ' >
    <div className='logo text-3xl pl-6 font-bold font-sans max-sm:text-2xl'>
  
    <img src  = {logo} className='w-16 h-16  '/>
    </div>
    <div className='flex  text-xl  w-1/3  justify-between font-bold max-lg:hidden' style={{color: '#efe3f1'
}}>
        <div className=' hover:text-blue-400'>
           <Link to = "/">home</Link> 
        </div>
        <div className=' hover:text-blue-400'>
          <Link to = "/service"> Services </Link> 
        </div>
        <div className=' hover:text-blue-400'>
          <Link to = "/about"> About</Link> 
        </div>
        <div className=' hover:text-blue-400 '>
        <Link to = "/contact">
        Contact

        </Link>  
        </div>
    </div>
    <div className=' text-blue-400 w-36 h-10 flex bg-white justify-center items-center max-lg:hidden'>
      Get a Quote
    </div>
    <div className='sidebar-btn mr-6   h-10 w-10 justify-center items-center bg-blue-300 hidden max-lg:flex' >
    <i class="fa-solid fa-bars text-lg text-white" onClick={sidebar}></i>

    </div>
      
    </div>
    <div className='sidebar modal w-full h-full'>
    <div className='   h-full bg-blue-500 text-white '>
    <div className='flex justify-end p-3' onClick={sidebar_modal}><i class="fa-solid fa-xmark text-xl" ></i></div>
    <div className=' mt-6 p-3 text-lg border-b-2 font-bold  '>
    <Link to = "/">Home</Link>

    </div>
    <div className=' mt-6 p-3 text-lg border-b-2 font-bold  '>
    <Link to = "/service">Services</Link>

    </div>
    <div className=' mt-6 p-3 text-lg border-b-2 font-bold  '>
    <Link to = "/about">About</Link>

    </div>
    <div className=' mt-6 p-3 text-lg border-b-2 font-bold  '>
    <Link to = "/contact">Contact</Link>

    </div>


    </div>
   

    </div>
    </>
    
  )
}
