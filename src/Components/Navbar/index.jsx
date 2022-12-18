import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Link } from './style'

const Navbar = () => {
  return (
    <>
      <Container>
        <Link active={window.location.pathname.includes('/home')} to={'/home'}>Home</Link>
        <Link active={window.location.pathname.includes('/students')} to={'/students'}>Students</Link>
        <Link active={window.location.pathname.includes('/teachers')} to={'/teachers'}>Teachers</Link>
        <Link active={window.location.pathname.includes('/about')} to={'/about'}>About</Link>
      </Container>
      <Outlet/>
    </>
  )
}

export default Navbar