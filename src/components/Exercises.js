import React, { useState } from 'react';

import { Box, Typography, Pagination, Stack } from '@mui/material';
import Exercise from './Exercise';

const Exercises = ({ exercises, searchResult }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleSwitch = (value) => {
    let num = value;
    setAnimate(true);
    setTimeout(() => {
      setIndex((num - 1) * 8);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setTimeout(() => {
        setAnimate(false);
      }, 300);
    }, 300);
  };

  return (
    <Box mt='200px' p='30px' sx={{ overflow: 'hidden' }} id='exercises'>
      <Typography variant='h3' textAlign='center'>
        Showing Results <span style={{ color: '#ff2625' }}>{searchResult}</span>
      </Typography>
      {exercises.length === 0 && (
        <Typography variant='h4' textAlign='center'>
          No Exercises Found
        </Typography>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          mt: '50px',
        }}
      >
        {exercises.slice(index, index + 8).map((e) => {
          return <Exercise key={e.id} info={e} animate={animate} />;
        })}
      </Box>
      <Stack justifyContent='center'>
        <Pagination
          sx={{
            mt: '50px',
          }}
          count={Math.ceil(exercises.length / 8)}
          onChange={(e, value) => handleSwitch(value)}
        />
      </Stack>
    </Box>
  );
};

export default Exercises;
