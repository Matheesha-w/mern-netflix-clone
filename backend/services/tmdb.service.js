import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';
import { response } from 'express';

  

export const fetchFromTMDB = async (url) => {

const options = {
    
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY,
    },
  };

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWM5NzY4ZjZlMjk1OTBhYzFlOGFjYWFhYzZhOTAzZCIsIm5iZiI6MTczNDQyNjE5OC43NTMsInN1YiI6IjY3NjEzZTU2N2JmMzg2MDUxNTE4OTk2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VV4V2-j7srxqS2Lbw6F_Up1LuMlubB8fJ0AWwe6_Fhc'
//     }
//   };



  const response = await axios.get(url, options);

  

  if(response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB"+ response.statusText);
  }

  return response.data;
};