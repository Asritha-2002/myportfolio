import React from 'react'
import Navbar from './Comp/Navbar/Navbar'
import Home from './Comp/Home/Home'
import About from './Comp/About/About'
import Services from './Comp/Services/Services'
import MyWork from './Comp/MyWork/MyWork'
import Contact from './Comp/Contact/Contact'
import Footer from './Comp/Footer/Footer'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
    <MyWork/>
     <Contact/>
     <Footer/>

    </div>
  )
}

export default App
