import gql from 'graphql-tag'

export default gql`
  mutation deleteUser($name: String) {
    deleteUser(name: $name) {
        name
    }
  }
`;