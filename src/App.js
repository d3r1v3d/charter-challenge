import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import GitHubRepos from './components/GitHubRepos';

import logo from './logo.svg';
import './css/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './lib/font-awesome/css/font-awesome.min.css';




const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    headers: {
      // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
      "Authorization": "Bearer c75fb2cd4038024dfc4a3f402e09a2b4f0767d2c"
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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="https://www.linkedin.com/in/justinroszelle/"><i className="fa fa-linkedin-square" aria-hidden="true"></i> Justin Roszelle</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead">
            <div className="overlay">
              <div className="container">
                <h1 className="display-1 text-white">Git Hub Repo Browser</h1>
                <h2 className="display-4 text-white">Charter Dynexp Challenge</h2>
              </div>
            </div>
          </header>
          <GitHubRepos />
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white"></p>
            </div>
          </footer>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
