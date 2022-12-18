import React from 'react'
import Navbar from '../Components/Navbar'
import './style.css'
import {Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { NavInformations } from '../utils/navbar'
const Root = () => {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route element={<Navbar/>}>
          {
            NavInformations.map(({ path, element})=>{
              return <Route path={path} element={element} />
            })
          }
          {/* <Route exact path={'/'} element={<Navigate to={'/home'}/>}/>
          <Route  path={'/home'} element={<Home />} />
          <Route  path={'/students'} element={<Students />} />
          <Route  path='/teachers' element={<Teachers />} />
          <Route  path={'/about'} element={<About />} /> */}
        </Route>
      </Routes>
      <h1>We Are Here: {location.pathname} </h1>
    </>
  )
}

export default Root