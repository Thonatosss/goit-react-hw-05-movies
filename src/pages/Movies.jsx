import axios from 'axios';
import { BASE_URL, API_KEY, BASE_IMG_URL } from 'constants/constants';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmInfo, setFilmInfo] = useState([]);

  const handleSearchQuerry = event => {
    event.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ querry: event.target.value });
  };

  async function handleSearchMovie(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${BASE_URL}search/movie?query=${searchParams.get(
          'querry'
        )}&api_key=${API_KEY}`
      );
      setFilmInfo(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearchMovie}>
        <input
          type="text"
          value={
            searchParams.get('querry') === null
              ? ''
              : searchParams.get('querry')
          }
          name="searchQuerry"
          placeholder="search a movie"
          onChange={handleSearchQuerry}
        />
        <button type="submit">Search</button>
      </form>
      {filmInfo.map(({ title, id, poster_path }) => (
        <Link to={`${id}`} key={id}>
          <h1>{title}</h1>
          <img
            src={`${BASE_IMG_URL}w500${poster_path}`}
            alt=""
            width="500"
            height="500"
          />
        </Link>
      ))}
    </div>
  );
}
