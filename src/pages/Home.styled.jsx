import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const FilmList = styled.ul`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
list-style: none;

`

const FilmListItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  background-color: #c9d6df;
  width: 230px;
  height: 320px;
  text-decoration: none;
`;

const FilmTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: black;
  
`;



export { FilmListItem, FilmList, FilmTitle };