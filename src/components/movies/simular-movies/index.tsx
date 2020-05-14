import React from 'react';
import Link from 'next/link';
import { GetSimilarMoviesComponent } from '../../../generated/types.d';

type Props = {
  id: number;
};

const SimilarMovies: React.FC<Props> = ({ id }) => {
  return (
    <GetSimilarMoviesComponent variables={{ id }}>
      {({ data }) => {
        const movies = data?.getSimilarMovies;
        return (
          <>
            {movies?.length && (
              <ul className="movie-similar">
                {movies.map((movie) => (
                  <li>
                    <Link href={`/movie/${movie.id}`}>
                      <a className="movie-similar__item">
                        <figure className="movie-similar__img">
                          <img src={movie.poster} alt=""/>
                        </figure>
                        <h2 className="movie-similar__title">{movie.name}</h2>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          
          </>
        )
      }}
    </GetSimilarMoviesComponent>
  )
};

export default SimilarMovies;
