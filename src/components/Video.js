import React from 'react';

import { Box, Typography, Link } from '@mui/material';

const Video = ({ info }) => {
  const details = info?.video;
  return (
    <Box width='360px'>
      <Link
        href={`https://www.youtube.com/watch?v=${details.videoId}`}
        target='_blank'
        sx={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <Box
          sx={{
            width: '360px',
            borderTopLeftRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <img
            style={{ width: '100%' }}
            src={details.thumbnails[0].url}
            alt={details.title}
          />
        </Box>
        <Typography
          fontWeight='bold'
          sx={{
            fontSize: '25px',
            mt: '10px',
          }}
        >
          {details.title}
        </Typography>
        <Typography
          fontWeight='bold'
          sx={{
            fontSize: '18px',
            mt: '10px',
            color: '#777',
          }}
        >
          {details.channelName}
        </Typography>
      </Link>
    </Box>
  );
};

export default Video;
