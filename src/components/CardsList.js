import { Card } from './Card';
import { configs } from '../services/configs';

export function CardsList({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return <Card key={ movie.id } title={ movie.title } description={ movie.overview } image_url={`${configs.API_IMAGE_URL}w500/${movie.poster_path} `} movieID={ movie.id }/>;
      })
      }
    </>
  )
}