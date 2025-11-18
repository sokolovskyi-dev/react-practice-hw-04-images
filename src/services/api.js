import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '39861298-38e1e10cd9c08fce6ef5c3957';

const perPage = 12;

export const getImage = async (query, page) => {
  const response = await axios.get(
    `?q=${query}}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
