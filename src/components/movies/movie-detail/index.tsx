import React from 'react';
import { GetMovieComponent } from '../../../generated/types.d';

type Props = {
  id: string;
};

const MovieDetail: React.FC<Props> = ({ id }) => {
  return (
    <GetMovieComponent variables={{ id: +id }}>
      {({ data }) => {
        return (
          <>
            {data?.getMovie ? (
              <div>{data.getMovie.name}</div>
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
