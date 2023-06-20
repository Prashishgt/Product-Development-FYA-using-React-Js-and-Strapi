import React from 'react';
import homeImg from '../assets/homeImage.jpg';

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="left__header__items">
        <p>"Welcome to Fun Onlympics – your go-to portal
          for all things entertainment! Dive into a world of
          exhilarating games, view schedules, and watch your
          favorite matches unfold live. Here, we make the thrill
          of the Olympics more accessible and enjoyable, right
          at your fingertips!"</p>
        <button className='button-30'>Get Started</button>
      </div>
      <div className="right__header__items">
        <img src={homeImg} alt="" />
      </div>
    </div>
  )
}

export default Header