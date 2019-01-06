import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer 16b21ab46ea0a59283fd9075b61f609fca9294eb`
            },
        });
    }
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
