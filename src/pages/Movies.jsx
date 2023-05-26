import axios from 'axios';
import { BASE_URL, API_KEY, BASE_IMG_URL } from '../Constants/constants';
import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  SearchBtn,
  SearchFormContainer,
  SearchFormInput,
  Form,
} from './Movies.styled';
import { FilmList, FilmListItem, FilmTitle } from './Home.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmInfo, setFilmInfo] = useState([]);
  const location = useLocation();

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
    <SearchFormContainer>
      <Form onSubmit={handleSearchMovie}>
        <SearchFormInput
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
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <FilmList>
        {filmInfo.map(({ title, id, poster_path }) => (
          <li key={id}>
            <FilmListItem to={`${id}`} state={{ from: location }}>
              <FilmTitle>{title}</FilmTitle>
              <img
                src={`${BASE_IMG_URL}w500${poster_path}`}
                alt=""
                width="200"
                height="230"
              />
            </FilmListItem>
          </li>
        ))}
      </FilmList>
    </SearchFormContainer>
  );
}
