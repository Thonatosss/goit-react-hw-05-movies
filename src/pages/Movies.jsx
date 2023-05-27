import axios from 'axios';
import {
  BASE_URL,
  API_KEY,
  BASE_IMG_URL,
} from 'components/constants/constants';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  SearchBtn,
  SearchFormContainer,
  SearchFormInput,
  Form,
  MoviesList,
  MoviesListItem,
  MoviesTitle,
  MovieLink,
} from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmInfo, setFilmInfo] = useState([]);
  const location = useLocation();

  const handleSearchQuery = event => {
    event.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ query: event.target.value });
  };

  async function handleSearchMovie(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${BASE_URL}search/movie?query=${searchParams.get(
          'query'
        )}&api_key=${API_KEY}`
      );
      setFilmInfo(response.data.results);
      localStorage.setItem('lastSearchQuery', searchParams.get('query'));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const lastSearchQuery = localStorage.getItem('lastSearchQuery');
    if (lastSearchQuery && filmInfo.length === 0) {
      async function searchMovie() {
        try {
          const response = await axios.get(
            `${BASE_URL}search/movie?query=${lastSearchQuery}&api_key=${API_KEY}`
          );
          setFilmInfo(response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
      searchMovie();
    }
  }, [filmInfo.length]);

  useEffect(() => {
    const lastSearchQuery = localStorage.getItem('lastSearchQuery');
    if (lastSearchQuery) {
      setSearchParams({ query: lastSearchQuery });
    }
  }, [setSearchParams]);

  return (
    <SearchFormContainer>
      <Form onSubmit={handleSearchMovie}>
        <SearchFormInput
          type="text"
          value={searchParams.get('query') || ''}
          name="searchQuery"
          placeholder="Search a movie"
          onChange={handleSearchQuery}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <MoviesList>
        {filmInfo.map(({ title, id, poster_path }) => (
          <MoviesListItem key={id}>
            <MovieLink to={`${id}`} state={{ from: location }}>
              <MoviesTitle>{title}</MoviesTitle>
              <img
                src={
                  !poster_path
                    ? `https://www.bartender.com.ua/wp-content/themes/bartender/images/default-thumbnail.jpg`
                    : `${BASE_IMG_URL}/w500${poster_path}`
                }
                alt=""
                width="200"
                height="230"
              />
            </MovieLink>
          </MoviesListItem>
        ))}
      </MoviesList>
    </SearchFormContainer>
  );
}
