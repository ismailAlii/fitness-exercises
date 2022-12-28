import React, { useState } from 'react';

import { Box, IconButton, Stack, Typography } from '@mui/material';
import {
  FitnessCenter,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';

const BodyParts = ({ categories, handleCategory, category }) => {
  const [index, setIndex] = useState(0);

  const [animate, setAnimate] = useState(false);

  const [disable, setDisable] = useState(false);

  const handleSwitch = (type) => {
    setAnimate(true);
    setDisable(true);
    if (type === 'next') {
      setTimeout(() => {
        setIndex(index < categories.length - 3 ? index + 3 : index);
        setTimeout(() => {
          setAnimate(false);
          setDisable(false);
        }, 300);
      }, 300);
    }
    if (type === 'prev') {
      setTimeout(() => {
        setIndex(index > 2 ? index - 3 : index);
        setTimeout(() => {
          setAnimate(false);
          setDisable(false);
        }, 300);
      }, 300);
    }
  };

  return (
    <Stack
      direction='row'
      padding='30px'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      gap='30px'
      position='relative'
    >
      {categories.slice(index, index + 3).map((e) => {
        return (
          <Box
            key={e}
            className='box'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              bgcolor: '#fff',
              opacity: animate ? 0 : 1,
              cursor: 'pointer',
              borderTop: category === e ? '5px solid #ff2625' : 'none',
            }}
            onClick={() => handleCategory(e)}
          >
            <FitnessCenter sx={{ color: '#ff2625', fontSize: '100px' }} />
            <Typography
              sx={{
                fontSize: '25px',
                textTransform: 'capitalize',
                fontWeight: 'bold',
              }}
            >
              {e}
            </Typography>
          </Box>
        );
      })}
      <Stack direction='row' sx={{ position: 'absolute', bottom: '-30px' }}>
        <IconButton
          aria-label='delete'
          size='large'
          onClick={() => handleSwitch('prev')}
          disabled={disable}
        >
          <KeyboardArrowLeft sx={{ fontSize: '40px' }} />
        </IconButton>
        <IconButton
          aria-label='delete'
          size='large'
          onClick={() => handleSwitch('next')}
          disabled={disable}
        >
          <KeyboardArrowRight sx={{ fontSize: '40px' }} />
        </IconButton>
        <Stack
          direction='row'
          gap='5px'
          sx={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {Array.from(Array(Math.ceil(categories.length / 3)), (e, i) => {
            return (
              <Box
                key={i}
                width={i === index / 3 ? 30 : 15}
                height={15}
                sx={{
                  bgcolor: i === index / 3 ? '#ff2625' : 'transparent',
                  border: '1px solid #ff2625',
                  transition: '.5s all ease',
                }}
              ></Box>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BodyParts;
