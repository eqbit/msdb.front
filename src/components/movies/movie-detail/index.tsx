import React from 'react';
// import SimilarMovies from '../simular-movies';
import Detail from './detail';

type Props = {
  id: number;
};

const MovieDetail: React.FC<Props> = ({ id }) => {
  return (
    <>
      <Detail id={id}/>
      {/*<SimilarMovies id={id}/>*/}
    </>
  )
};

export default MovieDetail;
