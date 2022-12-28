import React, { useState, useEffect } from 'react';

import Video from './Video';
import Loader from './Loader';

import { Box, Typography } from '@mui/material';

import { fetchYTData } from '../utils/fetchYTData';

const Videos = ({ name }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYTData(`All ${name} Exercise`).then((data) =>
      setVideos(data.contents.slice(0, 3))
    );
  }, [name]);

  if (!videos) return <Loader />;

  return (
    <Box sx={{ px: '30px', mt: '50px' }}>
      <Typography variant='h3' fontWeight='bold'>
        Watch <span style={{ color: '#ff2625' }}>{name}</span> Exercise Videos
      </Typography>
      {videos.length === 0 && <h1>no Results Found</h1>}
      <Box
        sx={{
          mt: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
        }}
      >
        {videos.map((info, i) => {
          return <Video key={i} info={info} />;
        })}
      </Box>
    </Box>
  );
};

export default Videos;
