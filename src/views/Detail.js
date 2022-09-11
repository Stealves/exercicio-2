import { useEffect, useState } from "react";
import { MoviesService } from '../services/MoviesService';
import { configs } from '../services/configs';
import { useParams } from 'react-router-dom';

export function Detail() {
  const [movie, setMovie] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    MoviesService.getPopularById(movieID)
      .then(({data}) => {
        setMovie(data)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <main id="movieDetail">
      <img src={`${configs.API_IMAGE_URL}w500/${movie.poster_path}`} alt={ movie.title } />
      <h1>{ movie.title }</h1>
      <p>{ movie.overview }</p>
    </main>
  )
}