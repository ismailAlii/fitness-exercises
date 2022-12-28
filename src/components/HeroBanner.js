import React from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { green, purple } from '@mui/material/colors';

import HeroBannerImag from '../assets/images/banner.png';
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2625',
    },
  },
});

const HeroBanner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
        position='relative'
        p='20px'
      >
        <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
          Fitness Club
        </Typography>
        <Typography
          mt={4}
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        >
          Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' my={3}>
          check out the most effective exercises
        </Typography>
        <Button
          variant='contained'
          size='large'
          sx={{ fontWeight: 'bold', fontSize: '26px' }}
          color='primary'
          href='#exercises'
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color='#ff2625'
          fontSize={200}
          sx={{ opacity: '.1', display: { lg: 'block', xs: 'none' } }}
        >
          Exercise
        </Typography>
        <img src={HeroBannerImag} alt='banner' className='hero-banner-img' />
      </Box>
    </ThemeProvider>
  );
};

export default HeroBanner;
