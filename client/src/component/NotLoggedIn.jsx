import React from 'react'
import BlockIcon from '@mui/icons-material/Block';
import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <div className="notlogged__wrapper">
      <div className="nologged__box__wrapper">
        <h1>Unauthorized User</h1>
        <BlockIcon />
        <p>We're sorry the page you requested cannot be access without valid user. Please go back to
          home page or login/create account from below.
        </p>
        <div className="btn__nologged__wrapper">
          <Link className='left__home__btn' to='/'>
            Go Home
          </Link>
          <Link className='left__home__btn' to='/login'>
            Login
          </Link>
        </div>
      </div>
    </div >

  );
}

export default NotLoggedIn;
