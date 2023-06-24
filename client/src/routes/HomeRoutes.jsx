import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import PrivateRoute from '../component/PrivateRoute';
import Broadcast from '../pages/Broadcast';
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from '../component/broadcast';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
      {/* <Route path="/email_verification" element={<OTVerification />} /> */}
      <Route path="/private-route" element={<PrivateRoute />}>
        <Route path="" element={<Broadcast />} />
      </Route>
    </Routes>
  )
}

export default HomeRoutes