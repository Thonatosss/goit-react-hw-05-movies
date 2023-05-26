import axios from 'axios';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BASE_URL, API_KEY, BASE_IMG_URL } from '../Constants/constants';
import { FilmDetailsContainer } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

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


  const { title, overview, budget, revenue, poster_path, genres, runtime } =
    movieData;

  return (
    <FilmDetailsContainer>
      <Link to={goBack.current}>Go back</Link>
      <h1>{title}</h1>
      <img
        src={`${BASE_IMG_URL}/w500${poster_path}`}
        width="350"
        height="400"
        alt=""
      />
      <h2>Overview</h2>
      <p>{overview}</p>
      <p>
        Budget: {budget}$ <br />
        Revenue: {revenue}$
      </p>

      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
      </ul>
      <p>Runtime: {runtime} min</p>
      <ul>
        <li>
          <Link to={'cast'}>Credits</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </FilmDetailsContainer>
  );
}
