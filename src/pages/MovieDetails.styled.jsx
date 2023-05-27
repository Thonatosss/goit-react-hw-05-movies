import styled from '@emotion/styled';

const FilmDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`;


const FilmDetailsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

const FilmDetailsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  background-color: #c9d6df;
  width: 230px;
  height: 320px;
  text-decoration: none;
`;

export { FilmDetailsContainer, Container, NotFoundTitle, FilmDetailsList, FilmDetailsItem };
