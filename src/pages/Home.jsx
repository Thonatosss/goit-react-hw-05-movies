import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, BASE_IMG_URL } from 'Constants/constants';

export default function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  useEffect(() => {
    async function FetchPopularFilms() {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        const filmInfo = response.data.results.map(film => {
          return {
            poster: `${BASE_IMG_URL}w500${film.poster_path}`,
            title: film.title,
            id: film.id,
          };
        });

        setPopularFilms(filmInfo);
      } catch (error) {
        console.log(error);
      }
    }
    FetchPopularFilms();
  }, []);

  return (
    <div>
      <ul>
        {popularFilms.map(film => {
          return <li key={film.id}>
            <p>{film.title}</p>
            <img src={film.poster} alt="" width="500" height="500" />
          </li>;
        })}
      </ul>
    </div>
  );
}
