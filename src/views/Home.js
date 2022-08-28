import { CardsList } from "../components/CardsList";
import { useEffect, useState } from "react";
import { MoviesService } from '../services/MoviesService';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getPopular()
      .then(({data}) => {
        setMovies(data.results)
      })
  }, []);
  
  return (
    <main id="articlesList">
      <CardsList movies={ movies } />
    </main>
  )
}