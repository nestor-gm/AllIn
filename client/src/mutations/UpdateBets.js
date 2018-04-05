import gql from 'graphql-tag'

export default gql`
  mutation UpdateBets($name: String, $nBets: Int, $wBets: Int) {
    updateBets(name: $name, nBets: $nBets, wBets: $wBets) {
      name
      nBets
      wBets
    }
  }
`;