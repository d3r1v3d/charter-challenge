import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import GitHubRepos from './components/GitHubRepos';

import logo from './assets/Octocat.png';
import './App.css';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    headers: {
      // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
      "Authorization": "Bearer 17e9df4c340c13b419ee7ce446fda016b8096629"
    }
  }
});
const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Github Repo Tool</div>
          </div>
          <GitHubRepos />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
