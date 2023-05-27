import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  BASE_URL,
  API_KEY,
  BASE_IMG_URL,
} from 'components/constants/constants';
import { useLocation } from 'react-router-dom';
import { FilmList, FilmListItem, FilmTitle } from './Home.styled';

export default function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        const filmInfo = response.data.results.map(
          ({ poster_path, title, id }) => {
            return {
              poster: `${BASE_IMG_URL}w500${poster_path}`,
              title: title,
              id: id,
            };
          }
        );

        setPopularFilms(filmInfo);
      } catch (error) {
        console.log(error);
      }
    }
    FetchPopularFilms();
  }, []);

  return (
    <div>
      <FilmList>
        {popularFilms.map(({ id, title, poster }) => {
          return (
            <li key={id}>
              <FilmListItem to={`movies/${id}`} state={{ from: location }}>
                <FilmTitle>{title}</FilmTitle>
                <img src={poster} alt="" width="200" height="230" />
              </FilmListItem>
            </li>
          );
        })}
      </FilmList>
    </div>
  );
}
