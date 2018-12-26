import React, { Component } from 'react';
import './App.css';
import { Query } from 'react-apollo'
import Myrepositories from './my-repositories.js'
import { userQuery } from './queries'
import Search from './search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={userQuery}>
          {(result) => {
            if (result.loading) return <p>loading...</p>
            if (result.error) return <p>{`${result.error.message}`}</p>;
            return (
              <div>
                <h1>Name: {result.data.viewer.name}</h1>
                <p>Email: {result.data.viewer.email}</p>
              </div>
            )

          }}
        </Query>
        <Myrepositories />
        <Search />
      </div>
    );
  }
}

export default App;
