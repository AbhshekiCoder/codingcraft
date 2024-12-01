import Footer from "./Compnents/Footer"
import Navbar from "./Compnents/Navbar"
import Home from "./Pages/Home"
import {Route, Router, Routes} from 'react-router-dom'
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
 

  return (
    <>
  
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
