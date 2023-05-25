import { API_KEY, BASE_IMG_URL, BASE_URL } from 'Constants/constants';
import axios from 'axios';
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
      <ul>
        {credits.cast &&
          credits.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={`${BASE_IMG_URL}/w500${profile_path}`}
                alt=""
                width="150"
                height="200"
              />
              <br /> {name} ({character})
            </li>
          ))}
      </ul>
    </div>
  );
}
