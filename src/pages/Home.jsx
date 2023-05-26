import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, BASE_IMG_URL } from 'constants/constants';
import { Link, useLocation } from 'react-router-dom';



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
      <ul>
        {popularFilms.map(({ id, title, poster }) => {
          return (
            <Link to={`movies/${id}`} key={id} state={{from: location}}>
              <p>{title}</p>
              <img src={poster} alt="" width="500" height="500" />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
