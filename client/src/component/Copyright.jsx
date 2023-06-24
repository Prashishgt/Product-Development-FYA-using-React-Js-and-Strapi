import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Fun Olympic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default Copyright