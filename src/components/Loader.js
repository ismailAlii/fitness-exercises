import React from 'react';
import { Box, Skeleton } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        p: '30px',
        mt: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
      }}
    >
      <Skeleton variant='rectangular' width={360} height={260} />
      <Skeleton variant='rectangular' width={360} height={260} />
      <Skeleton variant='rectangular' width={360} height={260} />
    </Box>
  );
};

export default Loader;
