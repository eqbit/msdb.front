import { gql } from 'apollo-boost';

export const forgotPasswordMutation = gql`
  mutation ForgotPassword($email: String!) {
      restorePassword(email: $email)
  }
`;
