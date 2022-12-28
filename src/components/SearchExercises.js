import React from 'react';

import BodyParts from './BodyParts';

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2625',
    },
  },
});

const SearchExercises = ({
  categories,
  search,
  handleSubmit,
  handleChange,
  handleCategory,
  category,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography
          variant='h2'
          fontWeight='bold'
          textAlign='center'
          mt='50px'
          sx={{ fontSize: { xs: '35px', md: '55px' } }}
        >
          Awesome Exercises You
          <br /> Should Know
        </Typography>
        <Paper
          component='form'
          onSubmit={handleSubmit}
          sx={{
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <Stack
            direction={'row'}
            sx={{ paddingX: { xs: '60px', md: '30px' } }}
            mt='50px'
          >
            <TextField
              placeholder='Search by (Exercises, bodyParts, Equipments or muscle... )'
              sx={{
                input: { height: '30px', fontSize: '25px' },
                label: { lineHeight: '50px' },
                flex: '1',
                backgroundColor: '#fff',
              }}
              value={search}
              onChange={(e) => handleChange(e)}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{
                width: '60px',
                height: '60px',
                textTransform: 'capitalize',
                fontSize: '25px',
              }}
            >
              <SearchIcon />
            </Button>
          </Stack>
        </Paper>
      </Box>
      <BodyParts
        categories={categories}
        handleCategory={handleCategory}
        category={category}
      />
    </ThemeProvider>
  );
};

export default SearchExercises;
