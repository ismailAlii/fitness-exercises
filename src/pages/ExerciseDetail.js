import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography, Stack } from '@mui/material';

import { fetchData } from '../utils/fetchData';

import Videos from '../components/Videos';
import Similar from '../components/Similar';

import bodyPartImg from '../assets/icons/body-part.png';
import equipmentImg from '../assets/icons/equipment.png';
import targetImg from '../assets/icons/target.png';
import { borderRadius } from '@mui/system';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData(`exercises/exercise/${id}`).then((data) => setInfo(data));
  }, [id]);

  if (info == null) return 'loading';

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'column', md: 'row' },
          mt: { sm: '50px', md: '100px' },
          px: { sm: '20px', md: '40px' },
        }}
      >
        <Box flex='1'>
          <img style={{ width: '100%' }} src={info.gifUrl} alt={info.name} />
        </Box>
        <Box flex='1' p='20px'>
          <Typography
            sx={{
              fontSize: { sm: '30px', md: '50px' },
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            {info.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '21px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: '#777',
              mt: '30px',
            }}
          >
            {`Exercises keep you strong, ${info.name} is one of the best`}
            <br />
            {`exercises to target your ${info.bodyPart}, It will help you improve your ${info.target} and gain energy.`}
          </Typography>
          <Stack direction='row' mt='30px' alignItems='center' gap='15px'>
            <Box
              sx={{
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                backgroundColor: '#fef1dd',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={bodyPartImg}
                alt='Body Part'
              />
            </Box>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {info.bodyPart}
            </Typography>
          </Stack>
          <Stack direction='row' mt='30px' alignItems='center' gap='15px'>
            <Box
              sx={{
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                backgroundColor: '#fef1dd',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={targetImg}
                alt='Body Part'
              />
            </Box>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {info.target}
            </Typography>
          </Stack>
          <Stack direction='row' mt='30px' alignItems='center' gap='15px'>
            <Box
              sx={{
                overflow: 'hidden',
                width: '80px',
                height: '80px',
                backgroundColor: '#fef1dd',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={equipmentImg}
                alt='Body Part'
              />
            </Box>
            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {info.equipment}
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Videos name={info.name} target={info.target} />
      <Similar info={info} />
    </Box>
  );
};

export default ExerciseDetail;
