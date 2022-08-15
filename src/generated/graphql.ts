import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthenticationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FishCaught = {
  __typename?: 'FishCaught';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  length?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  species: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['ID'];
  weight?: Maybe<Scalars['Float']>;
};

export type FishCaughtInput = {
  length?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  species: Scalars['String'];
  weight?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProfileInformation: ProfileInformationResponse;
  changePassword: UserResponse;
  createFishCaught: FishCaught;
  deleteFishCaught: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  logoutAll: Scalars['Boolean'];
  register: UserResponse;
  setUsername: Scalars['Boolean'];
  updateFishCaught?: Maybe<FishCaught>;
};


export type MutationAddProfileInformationArgs = {
  filename: Scalars['String'];
  username: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateFishCaughtArgs = {
  input: FishCaughtInput;
};


export type MutationDeleteFishCaughtArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: AuthenticationInput;
};


export type MutationRegisterArgs = {
  input: AuthenticationInput;
};


export type MutationSetUsernameArgs = {
  username: Scalars['String'];
};


export type MutationUpdateFishCaughtArgs = {
  id: Scalars['String'];
  input: FishCaughtInput;
};

export type ProfileInformationResponse = {
  __typename?: 'ProfileInformationResponse';
  error?: Maybe<Scalars['String']>;
  signedURL?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  fish?: Maybe<FishCaught>;
  fishCaughtForOwner?: Maybe<Array<FishCaught>>;
  fishes: Array<FishCaught>;
  isUsernameAvailable: Scalars['Boolean'];
  me?: Maybe<User>;
};


export type QueryFishArgs = {
  id: Scalars['String'];
};


export type QueryFishCaughtForOwnerArgs = {
  userId: Scalars['String'];
};


export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** True if user has activated/confirmed their account */
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  /** Locked out due to Forgot Password */
  forgotPasswordLocked: Scalars['Boolean'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: string, email: string, username?: string | null };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, username?: string | null } | null };

export type AddProfileInformationMutationVariables = Exact<{
  filename: Scalars['String'];
  username: Scalars['String'];
}>;


export type AddProfileInformationMutation = { __typename?: 'Mutation', addProfileInformation: { __typename?: 'ProfileInformationResponse', error?: string | null, signedURL?: string | null } };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: string, email: string, username?: string | null } | null } };

export type CreateFishCaughtMutationVariables = Exact<{
  input: FishCaughtInput;
}>;


export type CreateFishCaughtMutation = { __typename?: 'Mutation', createFishCaught: { __typename?: 'FishCaught', id: string, userId: string, species: string, weight?: number | null, length?: number | null, location?: string | null, notes?: string | null, createdAt: any, updatedAt: any } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  input: AuthenticationInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  input: AuthenticationInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: string, email: string } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type SetUsernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type SetUsernameMutation = { __typename?: 'Mutation', setUsername: boolean };

export type FishQueryVariables = Exact<{
  fishId: Scalars['String'];
}>;


export type FishQuery = { __typename?: 'Query', fish?: { __typename?: 'FishCaught', id: string, userId: string, species: string, weight?: number | null, length?: number | null, location?: string | null, notes?: string | null } | null };

export type FishesQueryVariables = Exact<{ [key: string]: never; }>;


export type FishesQuery = { __typename?: 'Query', fishes: Array<{ __typename?: 'FishCaught', id: string, species: string, weight?: number | null, length?: number | null, location?: string | null, notes?: string | null }> };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, username?: string | null } | null };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const AddProfileInformationDocument = gql`
    mutation AddProfileInformation($filename: String!, $username: String!) {
  addProfileInformation(filename: $filename, username: $username) {
    error
    signedURL
  }
}
    `;

export function useAddProfileInformationMutation() {
  return Urql.useMutation<AddProfileInformationMutation, AddProfileInformationMutationVariables>(AddProfileInformationDocument);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateFishCaughtDocument = gql`
    mutation CreateFishCaught($input: FishCaughtInput!) {
  createFishCaught(input: $input) {
    id
    userId
    species
    weight
    length
    location
    notes
    createdAt
    updatedAt
  }
}
    `;

export function useCreateFishCaughtMutation() {
  return Urql.useMutation<CreateFishCaughtMutation, CreateFishCaughtMutationVariables>(CreateFishCaughtDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($input: AuthenticationInput!) {
  login(input: $input) {
    user {
      id
      email
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($input: AuthenticationInput!) {
  register(input: $input) {
    user {
      id
      email
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const SetUsernameDocument = gql`
    mutation SetUsername($username: String!) {
  setUsername(username: $username)
}
    `;

export function useSetUsernameMutation() {
  return Urql.useMutation<SetUsernameMutation, SetUsernameMutationVariables>(SetUsernameDocument);
};
export const FishDocument = gql`
    query Fish($fishId: String!) {
  fish(id: $fishId) {
    id
    userId
    species
    weight
    length
    location
    notes
  }
}
    `;

export function useFishQuery(options: Omit<Urql.UseQueryArgs<FishQueryVariables>, 'query'>) {
  return Urql.useQuery<FishQuery, FishQueryVariables>({ query: FishDocument, ...options });
};
export const FishesDocument = gql`
    query Fishes {
  fishes {
    id
    species
    weight
    length
    location
    notes
  }
}
    `;

export function useFishesQuery(options?: Omit<Urql.UseQueryArgs<FishesQueryVariables>, 'query'>) {
  return Urql.useQuery<FishesQuery, FishesQueryVariables>({ query: FishesDocument, ...options });
};
export const IsUsernameAvailableDocument = gql`
    query isUsernameAvailable($username: String!) {
  isUsernameAvailable(username: $username)
}
    `;

export function useIsUsernameAvailableQuery(options: Omit<Urql.UseQueryArgs<IsUsernameAvailableQueryVariables>, 'query'>) {
  return Urql.useQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>({ query: IsUsernameAvailableDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};