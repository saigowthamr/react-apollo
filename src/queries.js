import { gql } from 'apollo-boost'

const reposQuery = gql`

query Myrepositories{
     viewer {
    repositories(first:5) {
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



export { reposQuery, userQuery };