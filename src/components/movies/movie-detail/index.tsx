import React from 'react';
import { GetMovieComponent, GetSimilarMoviesComponent } from '../../../generated/types.d';
import Link from 'next/link';

type Props = {
  id: string;
};

const MovieDetail: React.FC<Props> = ({ id }) => {
  return (
    <GetMovieComponent variables={{ id: +id }}>
      {({ data }) => {
        const movie = data?.getMovie;
        const genres = movie?.genre.split(',');
        return (
          <>
            {movie ? (
              <>
                <div className="movie-detail">
                  <figure className="movie-detail__poster">
                    <img src={movie.poster} alt=""/>
                  </figure>
                  
                  <aside className="movie-detail__data">
                    <h1 className="movie-detail__title">{movie.name}</h1>
                    
                    <ul className="movie-detail-genres">
                      {!!genres && genres.map((genre) => (
                        <li key={genre} className="movie-detail-genres__item">
                          {genre}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="movie-detail__description">
                      <p>{movie.description}</p>
                    </div>
                  </aside>
                </div>
                
                <GetSimilarMoviesComponent variables={{ id: +id }}>
                  {({ data }) => {
                    const similarMovies = data?.getSimilarMovies;
                    return (
                      <>
                        {similarMovies?.length && (
                          <ul className="movie-similar">
                            {similarMovies.map((simMovie) => (
                              <li>
                                <Link href={`/movie/${simMovie.id}`}>
                                  <a className="movie-similar__item">
                                    <figure className="movie-similar__img">
                                      <img src={simMovie.poster} alt=""/>
                                    </figure>
                                    <h2 className="movie-similar__title">{simMovie.name}</h2>
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
              </>
            ) : (
              <span>Loading...</span>
            )}
          </>
        )
      }}
    </GetMovieComponent>
  )
};

export default MovieDetail;
