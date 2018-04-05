import gql from 'graphql-tag'

export default gql`
  mutation Signup($name: String, $password: String, $role: Int) {
    signup(name: $name, password: $password, role: $role) {
      id
      name
      role
    }
  }
`;