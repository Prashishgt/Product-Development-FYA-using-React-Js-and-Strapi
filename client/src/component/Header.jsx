import React from 'react';
import homeImg from '../assets/homeImage.jpg';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

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
        <Link to='/login'>
          <button className='button-30'>Get Started</button>
        </Link>
      </div>
      <div className="right__header__items">
        <ReactPlayer
          loop={true}
          playing={true}
          controls={false}
          url='<https://www.youtube.com/watch?v=r-p0uGsArVI&ab_channel=NGIntros>'
        />
      </div>
    </div>
  )
}

export default Header