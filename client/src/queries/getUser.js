import gql from 'graphql-tag'

export default gql`
  query getUser($name: String) {
    getUser(name: $name) {
      nBets
      wBets
    }
  }
`;