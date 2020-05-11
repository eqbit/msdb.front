import React from 'react';
import { GetMoviesComponent } from '../../../generated/types.d';
import { cutText } from '../../../utils/text-utils';
import Link from 'next/link';

const MoviesList: React.FC = () => {
  let page = 1;
  const itemsPerPage = 20;
  
  return (
    <GetMoviesComponent variables={{ itemsPerPage, page }}>
      {({ data, fetchMore }) => {
        const loadMore = () => {
          fetchMore({
            variables: { itemsPerPage, page: ++page },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                // @ts-ignore
                getMovies: [ ...prev.getMovies, ...fetchMoreResult.getMovies ]
              });
            }
          })
        };
        
        return (
          <>
            <ul className="movies-list">
              {data?.getMovies && data.getMovies.map((movie) => (
                <li key={movie.id}>
                  <Link href={`movie/${movie.id}`}>
                    <a className="movies-list__item">
                      <h2 className="movies-list__title">{movie.name}</h2>
                      <figure className="movies-list__img">
                        <div className="movies-list__rating">{movie.popularity}</div>
                        <img src={movie.poster} alt=""/>
                      </figure>
                      <blockquote className="movies-list__description">
                        <p>{cutText(movie.description, 80, true)}</p>
                      </blockquote>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            
            <button onClick={loadMore}>Load more</button>
          </>
        )
      }}
    </GetMoviesComponent>
  )
};

export default MoviesList;
