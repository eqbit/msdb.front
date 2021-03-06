import React from 'react';
import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars';
import { GetMoviesComponent } from '../../../generated/types.d';
import { cutText } from '../../../utils/text-utils';

const MoviesList: React.FC = () => {
  let page = 1;
  const itemsPerPage = 20;
  
  return (
    <GetMoviesComponent variables={{ itemsPerPage, page }}>
      {({ data, fetchMore }) => {
        
        // @ts-ignore
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
            <div className="container">
              <div className="movies-list__wrapper">
                <Scrollbars
                  universal={true}
                  style={{ height: 367 }}
                  renderThumbHorizontal={props => <div {...props} className="movies-list__thumb-horizontal"/>}
                >
                  <ul className="movies-list">
                    {data?.getMovies && data.getMovies.map((movie) => (
                      <li key={movie.id} className="movies-list__item">
                        <Link href={`movie/${movie.id}`}>
                          <a className="movies-list__link" style={{backgroundImage: `url('${movie.poster}')`}}>
                            <div className="movies-list__rating">
                              <span>Рейтинг&nbsp;популярности</span>
                              <span>{movie.popularity}<small>pts</small></span>
                            </div>
              
                            <div className="movies-list__meta">
                              <h2 className="movies-list__title">{movie.name}</h2>
                
                              <p className="movies-list__description">
                                {cutText(movie.description, 80, true)}
                              </p>
                            </div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Scrollbars>
              </div>
            </div>
            
          </>
        )
      }}
    </GetMoviesComponent>
  )
};

export default MoviesList;
