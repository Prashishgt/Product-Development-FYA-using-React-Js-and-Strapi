import React from 'react';
import logo from '../assets/logo/logo.png';

const About = () => {
  return (
    <div className="about__wrapper" id="about">
      <img src={logo} alt="" />
      <h1>About Fun Olympic</h1>
      <h2>City of Yokyo, Japan</h2>
      <span></span>
      <p>
        "Welcome to our dynamic platform,
        crafted by an enthusiastic team commissioned
        by the vibrant city of Yokyo, dedicated to the
        FunOlympic Games 2023. Our aim is to bring the
        spirit, energy, and diversity of these games
        right at your fingertips. This digital platform
        serves as your ultimate guide and companion to
        the FunOlympics, offering you the convenience
        to watch live broadcasts and stay updated with
        the schedules of various events. Committed to
        making every moment of the Games accessible, we
        are driven by our passion for sports and unity.
        Join us as we transform the FunOlympic Games 2023
        into an unforgettable global celebration, right
        here on your screens."
      </p>
    </div>
  )
}

export default About