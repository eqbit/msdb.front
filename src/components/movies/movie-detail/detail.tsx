import React from 'react';
import { GetMovieComponent } from '../../../generated/types.d';

type Props = {
  id: number;
};

const Detail: React.FC<Props> = ({ id }) => {
  return (
    <div className="container">
      <GetMovieComponent variables={{ id }}>
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
                </>
              ) : (
                <span>Loading...</span>
              )}
            </>
          )
        }}
      </GetMovieComponent>
    </div>
  )
};

export default Detail;
