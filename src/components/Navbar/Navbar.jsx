import React, { useEffect } from 'react'
import { useRef } from 'react'
import './Navbar.css'
import logo from '/src/assets/logo.png'
import search_icon from '/src/assets/search_icon.svg'
import bell_icon from '/src/assets/bell_icon.svg'
import profile_icon from '/src/assets/profile_img.png'
import caret_icon from '/src/assets/caret_icon.svg'

const Navbar = () => {

  const navRef = useRef();

  //to create dark effect in scrolling the window to navbar
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
     <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Language</li>
      </ul>
     </div>
     <div className="navbar-right">
      <img src={search_icon} alt="" className='icons'/>
      <p>Children</p>
      <img src={bell_icon} alt="" className='icons'/>

      <div className="navbar-profile">
      <img src={profile_icon} alt="" className='profile' />
      <img src={caret_icon} alt="" className='dropdown' />

      <div className='dropdown'>
        <p>Sign Out of Netflix</p>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar
