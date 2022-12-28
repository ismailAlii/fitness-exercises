import axios from 'axios';

const BASE_URL = 'https://youtube-search-and-download.p.rapidapi.com/search';

const options = {
  params: {
    // query: 'exercise pull up',
    hl: 'en',
    type: 'v',
    sort: 'v',
  },
  headers: {
    'X-RapidAPI-Key': 'ee153a372emsh34da5590e73548fp1a3bd0jsnbaa0cb549dd5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchYTData = async (videos) => {
  const { data } = await axios.get(`${BASE_URL}?query=${videos}`, options);
  return data;
};
