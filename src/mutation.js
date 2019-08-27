import { gql } from 'apollo-boost'


const ADD_STAR = gql`
mutation AddStar($repoid:ID!){
   addStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}`


const Remove_Star = gql`
mutation RemoveStar($repoid:ID!){
   removeStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}`


export { ADD_STAR, Remove_Star };