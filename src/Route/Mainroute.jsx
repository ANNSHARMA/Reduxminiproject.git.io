import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Scorepage from '../Pages/Scorepage'
import Popularplayer from '../Pages/Popularplayer'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Form from '../Form/Form'

const Mainroute = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index path='/Add score' element={<Form />}></Route>
      <Route path='/Score page' element={<Scorepage />}></Route>
      <Route path='/Popular player' element={<Popularplayer />}></Route>
      <Route path='/About Us' element={<About />}></Route>
      <Route path='/Contact Us' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Mainroute