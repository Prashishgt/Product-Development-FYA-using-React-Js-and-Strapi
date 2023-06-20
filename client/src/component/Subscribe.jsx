/* eslint-disable react/no-unescaped-entities */
import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailRead';
import { useState } from 'react';


const Subscribe = () => {

  const [email, setEmail] = useState("");
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100vh"
    >
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize='large' />
      </IconButton>
      <Typography variant='h3' mb={2}>
        Suscribe To Our Newsletter
      </Typography>
      <Typography>
        "Get FunOlympic Games 2023 updates direct to your inbox. Subscribe now!"
      </Typography>
      <Box
        m="15px auto"
        p="2px 3px"
        display="flex"
        alginItems="center"
        width="65%"
        backgroundColor="#F2F2F2"
        mt={10}
      >
        <InputBase
          sx={{
            ml: 1, flex: 1
          }}
          placeholder='Enter email'
          onChange={((e) => setEmail(e.target.value))}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <Typography
          sx={{
            p: "10px",
            ":hover": {
              cursor: "pointer",
              bgcolor: "#f2f2f2bc",
            }
          }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  )
}

export default Subscribe;