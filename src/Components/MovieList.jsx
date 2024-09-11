import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      console.log(resp.data.results);
      setMovieList(resp.data.results); // Assuming resp.data.results is the correct path
    }).catch(error => {
      console.error("Error fetching movies by genre:", error);
    });
  };

  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-hide py-5 '>
      {movieList.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
