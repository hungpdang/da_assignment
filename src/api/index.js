import axios from 'axios';

export const fetchPhotos = async page => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_start=${page * 5}&_limit=5`,
  );
  return response.data;
};
