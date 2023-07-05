import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box p="40px 0" backgroundColor="white">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h6"
            fontWeight="bold"
            mb="30px"
            color="#4f3874"
          >
            Fun Olympics
          </Typography>
          <div>
            "Welcome to Fun Onlympics – your go-to portal for all things entertainment! Dive into a world of exhilarating games, view schedules, and watch your favorite matches unfold live. Here, we make the thrill of the Olympics more accessible and enjoyable, right at your fingertips!"
          </div>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h6"
            fontWeight="bold"
            mb="30px"
            color="#bd8741"
          >
            Contact Us
          </Typography>
          <Typography mb="30px">Milan Tole, Kathmandu</Typography>
          <Typography mb="30px">Email: funOlympics@gmail.com</Typography>
          <Typography mb="30px">(+977) 9813246717</Typography>

        </Box>
      </Box>
      <Typography variant="body2" color="#bd8741" align="center" fontSize="17px">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Fun Olympics Committee
        </Link>{' '}
        <span>2023</span>
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
