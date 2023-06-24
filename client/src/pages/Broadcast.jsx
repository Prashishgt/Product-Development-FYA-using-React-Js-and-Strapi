import React from 'react';
import Navbar from '../component/Navbar';
import BroadCastNavbar from '../component/broadcast/BroadCastNavbar';
import { Feed } from '../component/broadcast';

const Broadcast = () => {
  return (
    <>
      <Navbar />
      <Feed />
    </>
  )
}

export default Broadcast