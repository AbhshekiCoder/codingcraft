import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer  p-3 pb-16 '>
    <div className=' pt-16 max-md:pt-9 max-md:w-full  max-w-7xl   m-auto p-3'>
    <div className=' row  w-full  '>
    
       <div className='col-md text-lg font-bold pt-16  max-md:w-full  '>
       <p className=' max-md:text-center'>
       Shyam Nagar Nx Indore, MP
      


       </p>
       <p className='max-md:text-center'> abhishek@codingcraft.shop</p>
     
       </div>
       <div className='col-md  max-md:w-full max-md:text-center    '>
     
       <div className='flex justify-between  max-w-96 max-md:w-full max-md:m-auto max-md:mt-3 '>

       
       <div className='text-lg'>
      <Link to = "/">Home</Link> 

       </div>
       <div className='text-lg'>
        <Link to = "/service"> Services</Link>
       </div>
       <div className='text-lg'>
        <Link to = "/about">About</Link>
       </div>
       <div className='text-lg'>
        <Link to = "/contact">Contact</Link>
       </div>
       </div>
       <div className=' flex justify-end w-full max-md:justify-center max-md:mt-6 '>
       <div className='flex justify-between  w-52 mt-6 ' >
       <div>
       <i class="fa-brands fa-twitter"></i>
       </div>
       <div>
       <i class="fa-brands fa-youtube"></i>
       </div>

       <div>
       <i class="fa-brands fa-facebook"></i>
       </div>

       <div>
       <i class="fa-brands fa-telegram"></i>
       </div>



       </div>

       </div>
     


       </div>
       
     
    

    </div>
   
    </div>
    <div className=' mt-6 pt-9 pb-9 border-t-2 flex justify-center text-sm '>
    Copyright © 2024 codingcraft45@gmail.com| Powered by codingcraft.shop
    </div>
      

    
    </div>
  )
}
