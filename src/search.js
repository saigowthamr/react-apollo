import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';
import SearchResults from './search-results';

const searchQuery = gql`
  query repoSearch($queryString:String!,$len:Int!){
    search(first:$len,type:REPOSITORY,query:$queryString){
      nodes{
        ...on Repository{
          name
          id
          stargazers {totalCount}
          }
        }
     }
  }

`

class Search extends Component {

    state = {
        search: "",
        results: null,
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    fecthMore = (fetchMore, data) => {
        let searchString = { queryString: `${this.state.search} stars:>3000`, len: 10 }
        fetchMore({
            variables: { ...searchString, len: data.search.nodes.length + 10 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    console.log(this.state.over)
                    return prev
                }
                return Object.assign(prev, fetchMoreResult);
            }
        })
    }
    handleClick = async () => {

        let searchString = { queryString: `${this.state.search} stars:>3000`, len: 10 }

        let results = <Query query={searchQuery} variables={searchString}>
            {({ data, loading, error, fetchMore }) => {
                if (loading) return <p>loading...</p>
                if (error) return <p>{error.message}</p>
                else {
                    return (
                        <div>
                            <SearchResults data={data} />
                            {data.search.nodes.length > 1 &&
                                <button onClick={() => this.fecthMore(fetchMore, data)}>
                                    Fetch more</button>
                            }

                        </div>
                    )
                }
            }}
        </Query>

        this.setState({
            results
        })
    }

    render() {
        return (
            <div className="search">
                <h3>Github Search</h3>
                <input type="text" onChange={this.handleChange}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            this.handleClick()
                            return false
                        }
                    }}
                    value={this.state.search}
                    placeholder="Search" />
                <button
                    onClick={this.handleClick}
                    disabled={!this.state.search}
                >Search</button>
                <div className="search-results">
                    {this.state.results && this.state.results}
                </div>
            </div>
        )
    }
}

export default Search