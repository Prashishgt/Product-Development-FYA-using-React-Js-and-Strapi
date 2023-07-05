import React from 'react';
import ReactPlayer from 'react-player';

const SportsVideo = () => {
  return (
    <div className="sportsVideo__wrapper">
      <div className="video__wrapper">
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

export default SportsVideo