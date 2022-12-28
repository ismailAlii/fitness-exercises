import React from 'react';

import { Box, Typography } from '@mui/material';

import logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: '100px',
        bgcolor: '#fff',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <img src={logo} alt='logo' />
      <Typography>
        Made By Ismail Ali 2022, thank u 'JavaScript Mastery'
      </Typography>
    </Box>
  );
};

export default Footer;
