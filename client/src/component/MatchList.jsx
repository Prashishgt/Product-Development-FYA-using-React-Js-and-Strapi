import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';
import Flag from 'react-flagkit';

const MatchList = ({ firstFlag, time, lastFlag }) => {

  const [toggle, setToggle] = useState(false);
  return (
    <div className='main__matchlist__wrapper'>
      <div className="matchlist__wrapper">
        <Flag country={firstFlag} />
        <span>{time}</span>
        <Flag country={lastFlag} />
      </div>
      {
        !toggle ?
          <IconButton onClick={(e) => setToggle(true)}>
            <FavoriteBorderIcon color='secondary' />
          </IconButton>
          :
          <IconButton onClick={(e) => setToggle(false)}>
            <FavoriteIcon color='secondary' />
          </IconButton>
      }
    </div>

  )
}

export default MatchList;
