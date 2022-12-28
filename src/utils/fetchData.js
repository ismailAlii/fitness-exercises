import axios from 'axios';

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '16369cefb4msh5dc9d18d1703a95p1f8bdbjsnfbf058a68e1d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
