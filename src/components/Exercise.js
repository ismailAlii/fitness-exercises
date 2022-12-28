import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Exercise = ({ info, animate }) => {
  return (
    <Link to={`exercise/${info.id}`}>
      <Box
        sx={{
          opacity: animate ? 0 : 1,
          bgcolor: '#fff',
          transition: '.3s all ease',
          borderTop: '5px solid #ff2625',
          width: '360px',
          '&:hover': {
            transform: 'scale(1.1, 1.1)',
          },
        }}
      >
        <img style={{ maxWidth: '100%' }} src={info?.gifUrl} alt={info?.name} />
        <Stack direction='row' gap='10px' p='20px'>
          <Typography
            sx={{
              bgcolor: '#ffa7ac',
              height: '30px',
              lineHeight: '30px',
              borderRadius: '30px',
              paddingX: '10px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {info?.bodyPart}
          </Typography>
          <Typography
            sx={{
              bgcolor: '#f8c868',
              height: '30px',
              lineHeight: '30px',
              borderRadius: '30px',
              paddingX: '10px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {info?.target}
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: '#000',
            padding: '20px',
            fontWeight: 'bold',
          }}
        >
          {info?.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default Exercise;
