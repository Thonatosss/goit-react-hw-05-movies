import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, BASE_IMG_URL } from 'Constants/constants';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function GetMovieDetainls(movieId) {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    GetMovieDetainls(movieId);
  }, [movieId]);

  return (
    <div>
      <h1>{movieData.title}</h1>
      <img
        src={`${BASE_IMG_URL}/w500${movieData.poster_path}`}
        width="350"
        height="400"
        alt=""
      />
      <h2>
        Overview
      </h2>
      <p>
        {movieData.overview}</p>
      <p>
        Budget: {movieData.budget}$ <br />
        Revenue: {movieData.revenue}$
      </p>
      
      <h2>Genres</h2>
      <ul>
        
        {movieData.genres &&
        
        movieData.genres.map(genre => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
      <p>Runtime: {movieData.runtime} min</p>
      <ul>
        <li>
          <Link to={"cast"}>Credits</Link>
        </li>
        <li>
          <Link to={"reviews"}>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}
