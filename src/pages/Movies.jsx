import axios from 'axios';
import { BASE_URL, API_KEY, BASE_IMG_URL } from 'Constants/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [filmInfo, setFilmInfo] = useState([]);

  const handleSearchQuerry = event => {
    setSearchQuerry(event.target.value.toLowerCase());
  };

  async function handleSearchMovie(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${BASE_URL}search/movie?query=${searchQuerry}&api_key=${API_KEY}`
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
          value={searchQuerry}
          name="searchQuerry"
          placeholder="search a movie"
          onChange={handleSearchQuerry}
        />
        <button type="submit">Search</button>
      </form>
      {filmInfo.map(({title, id, poster_path}) => (
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
