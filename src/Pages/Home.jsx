import React from 'react'
import '../../src/CSS/Home.css';
import Navbar from '../Compnents/Navbar';

import bg3 from '../assets/bg3.jpg'
import Footer from '../Compnents/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCube, Pagination, Autoplay, EffectCoverflow, EffectCards } from 'swiper/modules';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png';
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import Card from '../Compnents/Card';

export default function Home() {
  
  return (
    <>
   
   <Card/>
  
   <div className='main-container'>

   
    <div className='bg-image'>
    <Navbar/>
    <div className=' max-w-7xl m-auto '> 
    <div className=' max-w-6xl font-bold font-sans h-fit  font-sans'style={{color: '#efe3f1'
}} >
    <p className='text-7xl max-md:text-5xl max-md:flex max-md:justify-center max-sm:text-3xl '> Digital Agency That</p>
    <p className='text-7xl pt-9 max-md:text-5xl max-md:flex max-md:justify-center  max-sm:text-3xl'> Thrives on Your Success</p>
    </div>
    <div className='mt-16 flex justify-end txt-white'>
      <p className=' max-w-lg text-xl font-bold mt-16 max-sm:text-lg max-sm:text-center max-sm:p-3 'style={{color: '#efe3f1'
}}>
      If you are looking for an agency to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.
      </p>
    </div>
    </div>
    
   
    
  
    </div>
    <div className='  pt-16 pb-16 '>
    <div className=' max-w-6xl m-auto max-md:p-3'>
    <h1 className='text-3xl font-bold'>
      Hire Us for
    </h1>
    <div className='w-full max-md:p-3'>
    <div className='row  mt-10 w-fit '>
    <div className='col-md max-md:mt-3'>
    <div className='text-gray-500 font-bold text-xl max-md:text-center'>
      Design
    </div>
    <div className='mt-6 text-lg max-md:text-center'>
    Our web design team has ample years of experience in the core areas of design to build a website that you need.
    </div>

    </div>
    <div className='col-md max-md:mt-3'>
    <div className='text-gray-500 font-bold text-xl max-md:text-center'>
    Development
    </div>
    <div className='mt-6 text-lg max-md:text-center'>
    Development
Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose
    </div>

    </div>
    <div className='col-md max-md:mt-3'>
    <div className='text-gray-500 font-bold text-xl max-md:text-center'>
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
    We are a team of 10 web experts with over 2 years of experience in website building and marketing to help businesses grow online.

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
    <div className='col-md  flex justify-end   max-md:justify-center max-md:p-3 max-md:w-full ' >
    <div className=' absolute  mt-36 img max-lg:mt-72 max-md:static max-md:mt-3 max-md:w-full  ' >
    <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/about.jpg" className='w-full h-full' />

    </div>

    </div>

    </div>
    </div>

    </div>

    </div>
    <div className=' w-full pt-16 pb-36 max-md:pb-0  bg-blue-300 ' style={{minHeight: "700px"}}>
    <h1 className='flex justify-center text-5xl font-bold  mt-36 max-md:text-3xl max-md:mt-9 text-gray-500'>Our Projects</h1>
    
    <div className='max-w-6xl   m-auto row   pt-16 w-full max-md:p-3'>
    <Swiper
        effect={'cube'}
        grabCursor={true}
       
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
       
        className="mySwiper h-96 max-w-2xl max-sm:h-60 "
      >
        <SwiperSlide className='h-full w-full ' >
        <div className='absolute text-white project-item flex justify-center items-center'>E-Commerce</div>
          
          <img src={img1} className='h-full w-full rounded-md ' onMouseOver={()=>{document.querySelector('.project-item').classList.add("project-items"), setTimeout(()=>{document.querySelector('.project-item').classList.remove("project-items")},2000)}} />
        </SwiperSlide>
        <SwiperSlide className='h-full w-full'>
        <div className='absolute text-white project-item2 flex justify-center items-center'>Food Delivery website</div>
          <img src={img2} className='h-full w-full rounded-md ' onMouseOver={()=>{document.querySelector('.project-item2').classList.add("project-items"), setTimeout(()=>{document.querySelector('.project-item2').classList.remove("project-items")},2000)}} />
        </SwiperSlide>
        <SwiperSlide className='h-full w-full'>
          <img src={img3} className='h-full w-full rounded-md' />
        </SwiperSlide>
        <SwiperSlide className='h-full w-full'>
          <img src={img4}  className='h-full w-full rounded-md '/>
        </SwiperSlide>
      </Swiper>
     
    </div>
    <div className=' max-w-6xl m-auto pt-16 h-fit'>
    <h1 className='mt-6 text-5xl font-bold max-md:flex max-md:justify-center max-md:text-3xl text-gray-500'>Why Choose us?</h1>
    <p className='font-bold mt-9 max-md:text-center max-sm:text-sm  max-sm:p-3'>
    We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
    </p>
    <p className='mt-3 max-md:flex max-md:text-center max-sm:text-sm max-sm:p-3'>
    With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.

    </p>
    <div className=' absolute min-h-96   bg-blue-500 max-w-6xl mt-6 flex flex-wrap text-white max-md:static ' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <div className='col-md p-9 bg-blue-500 max-w-96  max-md:w-full max-md:p-3'>
    <h1 className='text-4xl font-bold'>
      Have a project in mind
    </h1>
    <p className='mt-6 font-bold text-lg'>
    We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
    </p>
    <button className='p-2 mt-36 border'>
    <a href = "https://wa.link/xg97t2">Connect with us </a>

    </button>


    </div>
    <div className='col-md  bg-blue-500   max-w-3xl   max-md:max-w-6xl max-md:p-3 '>
    <img src = {bg3} className='w-full h-full'/>
    
   

   
   

    </div>

    </div>


    </div>

    
    

    </div>
   
   
   
    <div className='bg-blue-600   text-white  h-fit pt-9 pb-9'>
   
    <div className='max-w-6xl  m-auto   pt-96 flex justify-between max-md:pt-0 flex-wrap  '>
    <h1 className=' max-w-lg text-5xl font-bold mt-16  max-md:text-3xl max-md:m-auto max-md:pt-6 max-md:p-3'>
    Let us together build a flourishing business
    </h1>
    <div className='mt-16 max-w-lg font-bold max-md:text-sm max-md:m-auto max-md:pt-6 max-md:p-3'>
    When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
    </div>

    </div>
   

    </div>


    
    <div className=' pt-16   h-96  mb-6  '>
    <div className='max-w-7xl m-auto p-3'>
    <h1 className='font-bold'>Trust you partners</h1>
    <div className='mt-6 row p-3  justify-between flex-wrap max-md:p-3'>
    <div className='text-4xl  col-md font-bold max-md:p-3 max-md:w-full max-md:text-3xl'>
    Highly Motivated Team with Innovative Ideas

    </div>
    <div className='text-lg  col-md font-bold max-md:p-3 max-md:w-full max-md:text-sm'>
    We love what we do and therefore come up with the best possible solutions to help you set and grow online quickly. We are your trusted partners you can count on

    </div>
    <div className='mt-6 grid grid-cols-3  gap-x-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-3'>
    <div  className='w-full h-96 max-md:h-72 teams-item ' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} >
    <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/gallery-1.jpg" className='w-full h-full'/>

    </div>
    <div className='w-full h-96 max-md:h-72 teams-item '  style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} >
    <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/gallery-1.jpg" className='w-full h-full'/>

    </div>

    <div className='w-full h-96 max-md:h-72 teams-item '  style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}  >
    <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/gallery-1.jpg" className='w-full h-full'/>

    </div>


    </div>

    </div>


    </div>
    <div className=' bg-blue-500 pt-16 pb-16'>
    <div className = "row p-3 max-w-6xl m-auto  text-white">
      <div className='col-md  text-5xl  font-bold max-md:text-3xl'>
       Subscribe
       



      </div>
      <div className='col-md max-md:mt-3 max-md:p-3'>
      <div className='flex flex-wrap max-md:block max-md:w-full   '>
      <div className='w-96 h-10 max-md:w-full  '>
      <input type = "text" placeholder='Email Address' className='w-full  h-full text-black p-3 outline-none ' />

      </div>
      <div className='flex justify-center items-center border pl-3 pr-3 ml-3 max-lg:mt-3 max-lg:h-10  max-md:full'>
        I am Interested
      </div>
   
     
    

      </div>

      </div>
    </div>
   

    </div>
    <Footer/>
  
    
    </div>
    
</div>

    </>

   
  )
}
