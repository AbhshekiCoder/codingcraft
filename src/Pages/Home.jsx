import React from 'react'
import '../CSS/Home.css';
import Navbar from '../Compnents/Navbar';
import bg1 from '../assets/bg1.jpg';
export default function Home() {
  return (
    <>
   
   
 
   
    <div className='bg-image'>
    <Navbar/>
    <div className=' max-w-7xl m-auto '> 
    <div className=' max-w-6xl text-white font-bold h-fit  font-sans'>
    <p className='text-7xl max-md:text-5xl max-md:flex max-md:justify-center max-sm:text-3xl '> Digital Agency That</p>
    <p className='text-7xl pt-9 max-md:text-5xl max-md:flex max-md:justify-center  max-sm:text-3xl'> Thrives on Your Success</p>
    </div>
    <div className='mt-16 flex justify-end txt-white'>
      <p className=' max-w-lg text-white text-xl font-bold mt-16 max-sm:text-lg max-sm:text-center max-sm:p-3 '>
      If you are looking for an agency to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.
      </p>
    </div>
    </div>
    
   
    
  
    </div>
    <div className='bg-blue-300  text-white pt-16 pb-16 '>
    <div className=' max-w-6xl m-auto max-md:p-3'>
    <h1 className='text-3xl font-bold'>
      Hire Us for
    </h1>
    <div className='w-full max-md:p-3'>
    <div className='row  mt-10 w-fit '>
    <div className='col-md max-md:mt-3'>
    <div className='text-yellow-300 font-bold text-xl max-md:text-center'>
      Design
    </div>
    <div className='mt-6 text-lg max-md:text-center'>
    Our web design team has ample years of experience in the core areas of design to build a website that you need.
    </div>

    </div>
    <div className='col-md max-md:mt-3'>
    <div className='text-yellow-300 font-bold text-xl max-md:text-center'>
    Development
    </div>
    <div className='mt-6 text-lg max-md:text-center'>
    Development
Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpos
    </div>

    </div>
    <div className='col-md max-md:mt-3'>
    <div className='text-yellow-300 font-bold text-xl max-md:text-center'>
    Marketing
    </div>
    <div className='mt-6 text-lg max-md:text-center'>
    Marketing
    With researched digital marketing, we will ensure that new customers and clients are able to find your business.
    </div>

    </div>

    </div>


    </div>
   
    </div>
      
    </div>

    <div className='bg-blue-500  text-white pt-16 pb-16  w-full ' style={{minHeight: "650px"}}>
    <div className=' max-w-6xl m-auto max-md:p-3 '>
    <div className='w-full max-md:p-3'>
    <div className='row  w-fit '>
    <div className='col-md font-bold max-md:p-3'>
    <div className=''>
    <p className='text-5xl  font-bold max-lg:text-4xl max-md:text-2xl'>About us</p>
    <div className='text-lg font-bold mt-3 max-md:text-sm'>
    We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.

    </div>

    </div>
    <div className='mt-9'>
    <p className='text-3xl  font-bold max-md:text-xl'>Mission</p>
    <div className='text-lg font-bold mt-3 max-md:text-sm'>
   
    Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.

    </div>

    </div>

    <div className='mt-9'>
    <p className='text-3xl  font-bold max-md:text-xl'>Vission</p>
    <div className='text-lg font-bold mt-3 max-md:text-sm'>
    Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.

    </div>

    </div>
   
    </div>
    <div className='col-md  flex justify-end   max-md:justify-center max-md:p-3 max-md:w-full '>
    <div className=' absolute  mt-36 img max-lg:mt-72 max-md:static max-md:mt-3 max-md:w-full max-md:p-3  '>
    <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/about.jpg" className='w-full h-full'/>

    </div>

    </div>

    </div>
    </div>

    </div>

    </div>
    </>
   
  )
}
