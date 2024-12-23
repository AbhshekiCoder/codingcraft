import React from 'react'
import '../CSS/services.css'
import Navbar from '../Compnents/Navbar'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import Footer from '../Compnents/Footer';
import  {app} from '../firebase.js/firebse'
import { set, getDatabase, ref } from 'firebase/database';
import Card from '../Compnents/Card';
export default function Contact() {
  let position = [22.763383, 75.865488];

  let Contact= (e)=>{
    e.preventDefault();
  
    let form = document.forms['form'];
    let firstname = form.firstname.value;
    let lastname = form.name.value;
    let subject = form.subject.value;
    let email = form.email.value;
    let message = form.message.value;

    let db = getDatabase(app);
    const dbref = ref(db, `users${firstname}`)
    set(dbref, {
      name: firstname + lastname,
      email: email,
      subject: subject,
      message: message
    }).then(()=>{
      alert("your request submit successfully we will connect you shortly")
    })
  }
      return (
    
   <>
   <Card/>
     <div className='bg-image1 max-md:p-3' >
      
      <Navbar/>
      <div className=' max-w-6xl w-full m-auto  pt-36 '>
      
      <div className='text-7xl text-white font-bold mt-3 max-lg:ml-6 max-md:text-center max-md:text-4xl '><p className='border-t-4 w-16  max-md:m-auto '></p><p className='mt-6'>Contact us</p></div>

      </div>
 
    
 
  


      </div>
      <div className='bg-blue-500 text-white pt-16 '>
      <div className='max-w-7xl m-auto row'>
      <div className='col-md'>
      <h1 className='text-4xl font-bold max-md:text-center max-md:text-3xl'>We are here to help!</h1>
      <div className='flex items-center mt-9  max-md:justify-center '>
      <i class="fa-solid fa-location-dot mr-6"></i><div className='font-bold'>1234 N Spring St, Los Angeles, CA 90012</div>

      </div>
      <div className='flex items-center mt-3  max-md:justify-center'>
      <i class="fa-solid fa-phone mr-6"></i><div>
      +1 234 567 890
      </div>

      </div>
    
      <div className='text-3xl font-bold mt-9 max-md:text-center'>Follow Us</div>
        
    <div className='flex max-w-36 mt-6 justify-between max-md:m-auto max-md:mt-3'>
    <div>
    <i class="fa-brands fa-facebook"></i>
    </div>
    <div>
    <i class="fa-brands fa-twitter"></i>
    </div>
    <div>
    <i class="fa-brands fa-youtube"></i>
    </div>

    </div>

      </div>
      <div className='col-md '>
      <div className=' bg-white p-6  text-gray-500 max-md:mt-3'>
      <form className='' name="form" onSubmit={Contact}>
      <h1 className='text-3xl font-bold'>Send us a message</h1>
      <div className='flex  max-w-xl  max-md:flex-wrap justify-between  mt-6'>
      <div className='h-10 w-5/12 max-md:w-full '>
      <input type='text' placeholder='First Name' className='w-full h-full bg-gray-100 p-3' name='firstname' required/>

      </div>
      <div className='h-10 w-5/12  max-md:w-full max-md:mt-3'>
      <input type='text' placeholder='Sir Name' className='w-full h-full bg-gray-100 p-3' name="name" required/>

      </div>

      </div>
      <div className='mt-3 h-10'>
      <input type='email' placeholder='email' className='w-full h-full bg-gray-100 p-3' name='email' required/>

      </div>
      <div className='mt-3 h-10'>
      <input type='text' placeholder='subject' className='w-full h-full bg-gray-100 p-3' name="subject" required/>

      </div>
      <textarea rows={6} className='mt-3 bg-gray-100 w-full  p-3' placeholder='Message ' name="message"></textarea>
    
      <button className='mt-9 border p-2 font-bold'  type='submit'>Send Message</button>  

      </form>
    

      </div>
     
      </div>

      </div>
      </div>
      <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    style={{ height: "400px", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; OpenStreetMap contributors'
    />
    <Marker position={[51.505, -0.09]} />
  </MapContainer>
     <Footer/>
   </>
  )
}
