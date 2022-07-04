import {gql, useMutation} from '@apollo/client';
import {EmailSignUpProps} from '../screens/registration/sign-in/email/EmailSignInScreen';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

// loginWithEmail(email: "john@doe.com", password: "p4SSW0rd") {
const EmailLogin = gql`
  mutation ($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const useLoginWithEmail = () => {
  return useMutation(EmailLogin);
};

// loginWithEmail(email: "john@doe.com", password: "p4SSW0rd") {
const EmailSignUp = gql`
  mutation (
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const useSignUpWithEmail = () => {
  return useMutation(EmailSignUp);
};
