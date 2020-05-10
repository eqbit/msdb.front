import { gql } from 'apollo-boost';

export const getMovieQuery = gql`
    query GetMovie($id: Float!) {
        getMovie(id: $id) {
            name
            id
            genre
            year
            trailer
            popularity
            description
            poster
        }
    }
`;

export const getMoviesQuery = gql`
    query GetMovies($itemsPerPage: Float!, $page: Float!) {
        getMovies(itemsPerPage: $itemsPerPage, page: $page) {
            name
            id
            genre
            year
            trailer
            popularity
            description
            poster
        }
    }
`;
