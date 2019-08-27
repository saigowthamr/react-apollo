import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks'
import Myrepositories from './my-repositories'

function App() {
  const { loading, error, data } = useQuery(useQuery);
  if (loading) return <p>loading...</p>
  if (error) return <p>{error.message}</p>;
  return (
    <div className="App">
      <div>
        <h1>Name: {data.viewer.name}</h1>
        <p>Email: {data.viewer.email}</p>
      </div>
      <Myrepositories />
    </div>
  );
}

export default App;
