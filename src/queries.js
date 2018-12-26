import { gql } from 'apollo-boost'

const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          id
          name
          stargazers{
          totalCount
         }
          viewerHasStarred
        }
      }
    }
  }
}
`

const userQuery = gql` {
    viewer {
     name
     email
   }
}`

export { reposQuery, userQuery }