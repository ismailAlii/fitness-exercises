import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [data, setData] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('all');

  const [searchResult, setSearchResult] = useState('all');

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData('exercises').then((data) => {
      setData(data);
      setExercises(data);
    });

    fetchData('exercises/bodyPartList').then((data) =>
      setCategories(['all', ...data])
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      setExercises(
        data.filter((e) => {
          return (
            (e.name.toLowerCase().includes(search) ||
              e.bodyPart.toLowerCase().includes(search) ||
              e.equipment.toLowerCase().includes(search) ||
              e.target.toLowerCase().includes(search)) &&
            (e.bodyPart.toLowerCase() === category || category === 'all')
          );
        })
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }
    setSearch('');
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCategory = (cat) => {
    setExercises(
      data.filter((e) => {
        return e.bodyPart.toLowerCase() === cat.toLowerCase() || cat === 'all';
      })
    );
    setCategory(cat.toLowerCase());
    setSearchResult(cat.toLowerCase());
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        data={data}
        exercises={exercises}
        categories={categories}
        search={search}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCategory={handleCategory}
        category={category}
      />
      <Exercises exercises={exercises} searchResult={searchResult} />
    </Box>
  );
};

export default Home;
