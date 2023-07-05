import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import PrivateRoute from '../component/PrivateRoute';
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from '../component/broadcast';
import News from '../component/News';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/news' element={<News />} />
      <Route path='/broadcast/*' element={<PrivateRoute />}>
        <Route path='' element={<Feed />} />
      </Route>
      <Route path='video/:id' element={<VideoDetail />} />
      <Route path='channel/:id' element={<ChannelDetail />} />
      <Route path='search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  );
};

export default HomeRoutes;
