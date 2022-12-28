import React, { useState } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Loader from './Loader';

const SimilarExercise = ({ exercises, title }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(Math.floor(Math.random() * 15));
  const [animate, setAnimate] = useState(false);

  const handleClick = (id) => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    navigate(`../../exercise/${id}`);
    setIndex(Math.floor(Math.random() * 15));
  };

  if (!exercises) return <Loader />;

  return (
    <>
      <Typography
        variant='h3'
        fontWeight='bold'
        sx={{ paddingX: '30px', mt: '100px' }}
      >
        Similar <span style={{ color: '#ff2625' }}>{title}</span> Exercises
      </Typography>
      <Box
        sx={{
          mt: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
          paddingX: '30px',
        }}
      >
        {exercises.slice(index, index + 3).map((e, i) => {
          return (
            <Box
              onClick={() => handleClick(e.id)}
              sx={{
                opacity: animate ? 0 : 1,
                bgcolor: '#fff',
                transition: '.3s all ease',
                borderTop: '5px solid #ff2625',
                width: '360px',
                cursor: 'pointer',
              }}
              key={e.id + title}
            >
              <img style={{ maxWidth: '100%' }} src={e?.gifUrl} alt={e?.name} />
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
                  {e?.bodyPart}
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
                  {e?.target}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: '#000',
                  paddingX: '20px',
                  fontWeight: 'bold',
                  fontSize: '23px',
                }}
              >
                {e?.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default SimilarExercise;
