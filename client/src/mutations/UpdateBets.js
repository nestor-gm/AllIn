import gql from 'graphql-tag'

export default gql`
  mutation updateBets($name: String, $nBets: Int, $wBets: Int) {
    updateBets(name: $name, nBets: $nBets, wBets: $wBets) {
      id
      name
    }
  }
`;