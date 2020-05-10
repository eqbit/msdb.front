import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  getMovie?: Maybe<Movie>;
  getMovies?: Maybe<Array<Movie>>;
  countMovies?: Maybe<Scalars['Int']>;
  hello: Scalars['String'];
  logged?: Maybe<User>;
};


export type QueryGetMovieArgs = {
  id: Scalars['Float'];
};


export type QueryGetMoviesArgs = {
  page: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
};

export type Movie = {
   __typename?: 'Movie';
  id: Scalars['ID'];
  name: Scalars['String'];
  genre: Scalars['String'];
  directedBy: Scalars['String'];
  writtenBy: Scalars['String'];
  description: Scalars['String'];
  customDescription: Scalars['String'];
  year: Scalars['Float'];
  popularity: Scalars['Float'];
  poster: Scalars['String'];
  trailer: Scalars['String'];
  tmdbId: Scalars['String'];
  updated: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addMovie: Movie;
  updateMovie?: Maybe<Movie>;
  register: User;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  confirmEmail: Scalars['Boolean'];
  restorePassword: Scalars['Boolean'];
  changePassword?: Maybe<User>;
};


export type MutationAddMovieArgs = {
  data: AddMovieInput;
};


export type MutationUpdateMovieArgs = {
  data: AddMovieInput;
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};


export type MutationRestorePasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type AddMovieInput = {
  name: Scalars['String'];
  genre: Scalars['String'];
  directedBy?: Maybe<Scalars['String']>;
  writtenBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  customDescription?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
  poster?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  tmdbId?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type GetMovieQueryVariables = {
  id: Scalars['Float'];
};


export type GetMovieQuery = (
  { __typename?: 'Query' }
  & { getMovie?: Maybe<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'name' | 'id' | 'genre' | 'year' | 'trailer' | 'popularity' | 'description' | 'poster'>
  )> }
);

export type GetMoviesQueryVariables = {
  itemsPerPage: Scalars['Float'];
  page: Scalars['Float'];
};


export type GetMoviesQuery = (
  { __typename?: 'Query' }
  & { getMovies?: Maybe<Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'name' | 'id' | 'genre' | 'year' | 'trailer' | 'popularity' | 'description' | 'poster'>
  )>> }
);

export type ChangePasswordMutationVariables = {
  data: ChangePasswordInput;
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type ConfirmEmailMutationVariables = {
  token: Scalars['String'];
};


export type ConfirmEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'confirmEmail'>
);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String'];
};


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'restorePassword'>
);

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>
  )> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = {
  data: RegisterInput;
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>
  ) }
);

export type LoggedQueryVariables = {};


export type LoggedQuery = (
  { __typename?: 'Query' }
  & { logged?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>
  )> }
);


export const GetMovieDocument = gql`
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
export type GetMovieComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMovieQuery, GetMovieQueryVariables>, 'query'> & ({ variables: GetMovieQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMovieComponent = (props: GetMovieComponentProps) => (
      <ApolloReactComponents.Query<GetMovieQuery, GetMovieQueryVariables> query={GetMovieDocument} {...props} />
    );
    
export type GetMovieProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMovieQuery, GetMovieQueryVariables>
    } & TChildProps;
export function withGetMovie<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMovieQuery,
  GetMovieQueryVariables,
  GetMovieProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMovieQuery, GetMovieQueryVariables, GetMovieProps<TChildProps, TDataName>>(GetMovieDocument, {
      alias: 'getMovie',
      ...operationOptions
    });
};
export type GetMovieQueryResult = ApolloReactCommon.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const GetMoviesDocument = gql`
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
export type GetMoviesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMoviesQuery, GetMoviesQueryVariables>, 'query'> & ({ variables: GetMoviesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMoviesComponent = (props: GetMoviesComponentProps) => (
      <ApolloReactComponents.Query<GetMoviesQuery, GetMoviesQueryVariables> query={GetMoviesDocument} {...props} />
    );
    
export type GetMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetMoviesQuery, GetMoviesQueryVariables>
    } & TChildProps;
export function withGetMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMoviesQuery,
  GetMoviesQueryVariables,
  GetMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetMoviesQuery, GetMoviesQueryVariables, GetMoviesProps<TChildProps, TDataName>>(GetMoviesDocument, {
      alias: 'getMovies',
      ...operationOptions
    });
};
export type GetMoviesQueryResult = ApolloReactCommon.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    id
    name
    email
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export type ChangePasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangePasswordMutation, ChangePasswordMutationVariables>, 'mutation'>;

    export const ChangePasswordComponent = (props: ChangePasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> mutation={ChangePasswordDocument} {...props} />
    );
    
export type ChangePasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>
    } & TChildProps;
export function withChangePassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  ChangePasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ChangePasswordMutation, ChangePasswordMutationVariables, ChangePasswordProps<TChildProps, TDataName>>(ChangePasswordDocument, {
      alias: 'changePassword',
      ...operationOptions
    });
};
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ConfirmEmailDocument = gql`
    mutation ConfirmEmail($token: String!) {
  confirmEmail(token: $token)
}
    `;
export type ConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export type ConfirmEmailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>, 'mutation'>;

    export const ConfirmEmailComponent = (props: ConfirmEmailComponentProps) => (
      <ApolloReactComponents.Mutation<ConfirmEmailMutation, ConfirmEmailMutationVariables> mutation={ConfirmEmailDocument} {...props} />
    );
    
export type ConfirmEmailProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>
    } & TChildProps;
export function withConfirmEmail<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ConfirmEmailMutation,
  ConfirmEmailMutationVariables,
  ConfirmEmailProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ConfirmEmailMutation, ConfirmEmailMutationVariables, ConfirmEmailProps<TChildProps, TDataName>>(ConfirmEmailDocument, {
      alias: 'confirmEmail',
      ...operationOptions
    });
};
export type ConfirmEmailMutationResult = ApolloReactCommon.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  restorePassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export type ForgotPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>, 'mutation'>;

    export const ForgotPasswordComponent = (props: ForgotPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...props} />
    );
    
export type ForgotPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>
    } & TChildProps;
export function withForgotPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
  ForgotPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ForgotPasswordMutation, ForgotPasswordMutationVariables, ForgotPasswordProps<TChildProps, TDataName>>(ForgotPasswordDocument, {
      alias: 'forgotPassword',
      ...operationOptions
    });
};
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    firstName
    lastName
    email
    name
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    firstName
    lastName
    email
    name
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoggedDocument = gql`
    query Logged {
  logged {
    id
    firstName
    lastName
    email
    name
  }
}
    `;
export type LoggedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoggedQuery, LoggedQueryVariables>, 'query'>;

    export const LoggedComponent = (props: LoggedComponentProps) => (
      <ApolloReactComponents.Query<LoggedQuery, LoggedQueryVariables> query={LoggedDocument} {...props} />
    );
    
export type LoggedProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<LoggedQuery, LoggedQueryVariables>
    } & TChildProps;
export function withLogged<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoggedQuery,
  LoggedQueryVariables,
  LoggedProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, LoggedQuery, LoggedQueryVariables, LoggedProps<TChildProps, TDataName>>(LoggedDocument, {
      alias: 'logged',
      ...operationOptions
    });
};
export type LoggedQueryResult = ApolloReactCommon.QueryResult<LoggedQuery, LoggedQueryVariables>;