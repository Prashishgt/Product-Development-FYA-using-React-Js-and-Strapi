import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="70px" p="40px 0" backgroundColor="#e6dfdf">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi
            minima veritatis voluptatem error distinc tio optio accusantium ea,
            natus doloribus dolor ab quae e um molestiae expedita velit culpa?
            At ab exercitationem commo di delectus minima doloremque saepe
            maiores quibusdam quae, cul pa corrupti voluptatem eveniet mollitia.
            Dolores sapiente fuga l abore nihil quam!
          </div>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
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
          <Typography mb="30px">50 Avenue, London, 1050</Typography>
          <Typography mb="30px">Email: example@gmail.com</Typography>
          <Typography mb="30px">(434) 4445-2221</Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
