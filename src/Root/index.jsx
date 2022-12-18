import React from 'react'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Students from '../Components/Students'
import Teachers from '../Components/Teachers'
import About from '../Components/About'
import './style.css'
import {Navigate, Route, Routes, useLocation } from 'react-router-dom'
const Root = () => {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
          <Route exact path={'/'} element={<Navigate to={'/home'}/>}/>
          <Route  path={'/home'} element={<Home />} />
          <Route  path={'/students'} element={<Students />} />
          <Route  path='/teachers' element={<Teachers />} />
          <Route  path={'/about'} element={<About />} />
        </Route>
        <Route exact path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
      <h1>We Are Here: {location.pathname} </h1>
    </>
  )
}

export default Root