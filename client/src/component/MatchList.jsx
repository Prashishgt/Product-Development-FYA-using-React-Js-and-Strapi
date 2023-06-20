import React from 'react';
import Flag from 'react-flagkit';

const MatchList = ({ firstFlag, time, lastFlag }) => {
  return (
    <div className="matchlist__wrapper">
      <Flag country={firstFlag} />
      <span>{time}</span>
      <Flag country={lastFlag} />
    </div>
  )
}

export default MatchList;
