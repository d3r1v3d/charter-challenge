import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React from 'react';
import {string, func} from 'prop-types';
import {compose, withState} from 'recompose';
import { ApolloProvider } from 'react-apollo';
import UserSearch from './components/UserSearch';
import GithubUser from './components/github-user';
import logo from './images/logo.svg';
import styles from './App.css';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    headers: {
      // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
      "Authorization": "Bearer 426121aa45f6d2e04da75bb169b7041f74f80238"
    }
  }
});
const client = new ApolloClient({
  networkInterface
});

const App = ({setUserLogin, userLogin}) => {
  return (
    <ApolloProvider client={client}>
      <div>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>GitHub Browser</p>
        </header>
        <div className={styles.appWrapper}>
          <div className={styles.searchWrapper}>
            <UserSearch onSubmit={setUserLogin}/>
          </div>
          {userLogin ? <GithubUser key={userLogin} login={userLogin}/> : null}
        </div>
      </div>
    </ApolloProvider>
  );
};

App.propTypes = {
  setUserLogin: func.isRequired,
  userLogin: string.isRequired
};

export default compose(
  withState('userLogin', 'setUserLogin', '')
)(App);
