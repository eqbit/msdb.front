import { gql } from 'apollo-boost';

export const helloQuery = gql`
    query Logged {
        logged {
            id
            name
        }
    }
`;
