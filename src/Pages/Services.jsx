import React from 'react'
import '../CSS/services.css'
import Navbar from '../Compnents/Navbar'
import bg3 from '../assets/bg3.jpg'
import Footer from '../Compnents/Footer'
import Card from '../Compnents/Card'
export default function Services() {
  return (
     <>
     <Card/>
      <div className='bg-image1' >
      
      <Navbar/>
      <div className=' max-w-6xl w-full m-auto  pt-36'>
      
      <div className='text-6xl text-white font-bold mt-3  max-md:text-center max-md:text-4xl '><p className='border-t-4 w-16  max-md:m-auto'></p>Services</div>

      </div>
 
  
 
  


      </div>
     <div className='bg-blue-500 text-white pt-16 pb-16'>
     <div className='max-w-7xl m-auto  max-md:text-center max-md:p-3 '>
     <h1 className='text-5xl font-bold text-center max-md:text-3xl'>how  can we help you?</h1>
     
     <div className='row pt-3 w-full  border-t-2 mt-6 max-md:p-3 max-md:ml-0'>
     <div className='col-md pt-16 border-r-2 h-96 pl-9 max-md:h-fit max-md:border-r-0  max-md:border-b-2 max-md:pl-0 max-md:pb-3'>
     <h1 className='text-3xl font-bold max-md:text-center max-md:text-2xl max-sm:text-xl '>Creative Design</h1>
     <p className='text-lg font-bold mt-6 max-sm:text-base'>Our team of professional graphic and web designers will help you with unique and creative logo and website designs that will match your business.</p>
     <button className='mt-6 border p-2'><a href = "https://wa.link/xg97t2">Get in Touch </a>
</button>

     </div>
     <div className='col-md pt-16 border-r-2 h-96   pl-9 max-md:h-fit max-md:border-r-0   max-md:pl-0 max-md:border-b-2 max-md:pb-3'>
     <h1 className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Research & Development</h1>
     <p className='text-lg font-bold mt-6 max-sm:text-base'>We help you develop the right website with a good user interface built after a lot of research in the industry to help you make the best out of it.</p>
     <button className='mt-6 border p-2'><a href = "https://wa.link/xg97t2">Get in Touch </a></button>

     </div>

     <div className='col-md pt-16 h-96   pl-9 max-md:h-fit max-md:border-r-0  max-md:border-b-2 max-md:pl-0 max-md:pb-3'>
     <h1 className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Branding & Marketing</h1>
     <p className='text-lg font-bold mt-6 max-sm:text-base'>Branding & Marketing
     Need help with branding and marketing to reach out to a larger audience? We can help you create a brand presence and marketing efforts.</p>
     <button className='mt-6 border p-2'><a href = "https://wa.link/xg97t2">Get in Touch </a></button>

     </div>


     </div>


 
     
     </div>
     

     </div>
     <div className=' w-full  pb-36 max-md:pb-0 ' style={{minHeight: "700px"}}>
    <h1 className='flex justify-center text-5xl font-bold  mt-36 max-md:text-3xl max-md:mt-9 text-gray-500'>Client we Worked with </h1>
    
    <div className=' max-w-5xl m-auto row   pt-16 w-full max-md:p-3'>
     <div className='col-md  max-md:w-full max-md:flex max-md:justify-center mt-3'>
     <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/client-logo-5.png"/>

     </div>
     <div className='col-md max-md:w-full max-md:flex max-md:justify-center  mt-3'>
     <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/client-logo-5.png"/>

     </div>
     <div className='col-md  max-md:w-full max-md:flex max-md:justify-center mt-3'>
     <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/client-logo-5.png"/>

     </div>
     <div className='col-md max-md:w-full max-md:flex max-md:justify-center mt-3'>
     <img src = "https://crazzyshuttlers.com/wp-content/uploads/2021/05/client-logo-5.png"/>

     </div>

    </div>
    <div className=' max-w-6xl m-auto pt-16 h-fit'>
    <h1 className='mt-6 text-5xl font-bold max-md:flex max-md:justify-center max-md:text-3xl text-gray-500'>Why Choose us?</h1>
    <p className='font-bold mt-9 max-md:text-center max-sm:text-sm  max-sm:p-3'>
    We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
    </p>
    <p className='mt-3 max-md:flex max-md:text-center max-sm:text-sm max-sm:p-3'>
    With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.

    </p>
    <div className=' absolute min-h-96   bg-blue-500 max-w-6xl mt-6 flex flex-wrap text-white max-md:static ' >
    <div className='col-md p-9 bg-blue-500 max-w-96  max-md:w-full max-md:p-3'>
    <h1 className='text-4xl font-bold'>
      Have a project in mind
    </h1>
    <p className='mt-6 font-bold text-lg'>
    We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
    </p>
    <button className='p-2 mt-36 border'>
    Connect with us 

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
    <Footer/>

     </>
     
  )
}
