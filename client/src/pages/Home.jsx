import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import About from '../component/About'
import Schedule from '../component/Schedule'
import Subscribe from '../component/Subscribe';
import Footer from '../component/Footer';
import FeedbackForm from '../component/FeedbackForm'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Schedule />
      <About />

      <Subscribe />
      <FeedbackForm />
      <Footer />
    </>
  )
}

export default Home