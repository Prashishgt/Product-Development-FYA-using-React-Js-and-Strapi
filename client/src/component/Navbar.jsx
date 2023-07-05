import React, { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useAuth } from '../component/Login/Login';

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__left__items">
          <NavLink className="nav__logo__link" to="/">
            <img src={logo} alt="" />
            <span>Fun Olympics
            </span>
          </NavLink>
        </div>
        <div className="nav__middle__item">
          <NavLink to="/" className='link__middle'>Home</NavLink>
          <NavLink to="/">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='link__middle'>About</Link>
          </NavLink>
          <NavLink to="/">
            <Link
              activeClass="active"
              to="schedule"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='link__middle'>Schedule</Link>
          </NavLink>

          <NavLink
            className='link__middle' to="/news">News</NavLink>
          <NavLink className='link__middle' to='/broadcast'>Broadcast</NavLink>

        </div>
        <div className="nav__right__item">
          {
            isAuthenticated ?
              <>
                <NavLink to="/">
                  <button className='button-30' onClick={logout}>Log out</button>
                </NavLink>
              </> :
              <div className="not__user">
                <NavLink className="link__right" to="/login">Already have an account?</NavLink>
                <NavLink to="/register">
                  <button className='button-30'>Get Started</button>
                </NavLink>
              </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar