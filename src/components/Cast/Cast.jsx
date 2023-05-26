import { API_KEY, BASE_IMG_URL, BASE_URL } from 'Constants/constants';
import axios from 'axios';
import { FilmList, FilmListItem } from 'pages/Home.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function GetMovieCredits(movieId) {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCredits(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    GetMovieCredits(movieId);
  }, [movieId]);
  return (
    <div>
      <FilmList>
        {credits.cast &&
          credits.cast.map(({ id, profile_path, name, character }) => (
            <FilmListItem key={id}>
              {name} ({character})
              <img
                src={`${BASE_IMG_URL}/w500${profile_path}`}
                alt=""
                width="150"
                height="200"
              />
            </FilmListItem>
          ))}
      </FilmList>
    </div>
  );
}
