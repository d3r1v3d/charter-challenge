import React, { Component } from 'react';
import { ApolloProvider }   from 'react-apollo';
import RepoList             from '../components/RepoList';
import client               from '../data/networkClient'
import logo                 from '../css/logo.svg';
import 							 '../css/App.css';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import {store}              from '../data/store'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h3>Charter Code Test - Aaron Roesser</h3>
				</div>
				<MuiThemeProvider>
					<ApolloProvider client={client} store={store}>
						<RepoList/>
					</ApolloProvider>
				</MuiThemeProvider>
			</div>
		);
	}
}


export default App;




