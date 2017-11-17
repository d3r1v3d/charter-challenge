import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import GitHubRepos from './components/GitHubRepos';


const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    headers: {
      // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
      "Authorization": "Bearer 7f73c7aa95c5314ae7ac96ad56565ea5b89b675b"
    }
  }
});
const client = new ApolloClient({
  networkInterface
});

const App = () => 
   <div className="ui container">
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to Repo Explorer</h2>
          </div>
          <GitHubRepos />
        </div>
      </ApolloProvider>
  </div>
  


export default App;
