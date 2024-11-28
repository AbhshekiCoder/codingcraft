import Navbar from "./Compnents/Navbar"
import Home from "./Pages/Home"
import {Route, Router, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
  
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
