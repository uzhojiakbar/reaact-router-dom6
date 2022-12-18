import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavInformations } from '../../utils/navbar'
import { Container, Link } from './style'
const Navbar = () => {
  const isActive = (url) => {
    return window.location.pathname.includes(url)
  } 
  return (
    <>
      <Container>
        {
          NavInformations.map((item)=>{
            return <Link active={isActive(item.path)} to={item.path}>{item.title}</Link>
          })
        }
      </Container>
      <Outlet/>
    </>
  )
}

export default Navbar