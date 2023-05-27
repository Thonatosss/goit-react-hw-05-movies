import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchFormInput = styled.input`
  width: 700px;
  height: 40px;
  margin-right: 20px;
  padding-left: 40px;
  font-size: 20px;
`;


const SearchBtn = styled.button`
height: 45px;
padding: 0 10px;


`


const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

const MoviesListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c9d6df;
  width: 230px;
  height: 320px;
`;

const MoviesTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: black;
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;


export {
  SearchFormContainer,
  SearchFormInput,
  SearchBtn,
  Form,
  MoviesTitle,
  MoviesList,
  MoviesListItem,
  MovieLink,
};