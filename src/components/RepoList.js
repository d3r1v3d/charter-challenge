import React, { Component } 			from 'react';
import PropTypes            			from 'prop-types';
import compose              			from './GitHubRepos'
import { connect }          			from 'react-redux'
import { handle_change, handle_sort }   from '../redux/index'
import TextField            			from 'material-ui/TextField';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';


class RepoList extends Component {
	
	static propTypes = {
		
		user: PropTypes.string.isRequired,
		
		repos: PropTypes.array.isRequired
	}

	handleChange(e){
		
		//handle both the statechange for the filter box, and pass in our apollo data
		this.props.dispatch(

			handle_change(e.target.value,this.props.repos)
			
		)

	}

	handleSort(e,orderBy){
		
		//handle sorting of data
		this.props.dispatch(

			handle_sort(e.target.innerText, this.props.filterList || this.props.repos, orderBy || "asc")

		)

	}

	render(){
		
		const { input , orderBy } = this.props
		
		//this.props.filterList[]  - is propagated from our redux side of things
		//this.props.repos[] 	   - is propagated from the apollo side of things
		const repos = this.props.filterList || this.props.repos 

		return (
			<div>
				<TextField floatingLabelText="filter" name="filter" value={input} onChange={ e => this.handleChange(e) }  />
				<Table selectable={false} showRowHover={true} >
					<TableHeader displaySelectAll={false} >
						<TableRow onClick={ e => this.handleSort(e, orderBy)} >
							<TableHeaderColumn>name</TableHeaderColumn>
							<TableHeaderColumn>primaryLanguage</TableHeaderColumn>
							<TableHeaderColumn>hasWikiEnabled</TableHeaderColumn>
							<TableHeaderColumn>updatedAt</TableHeaderColumn>
							<TableHeaderColumn>updatedAt</TableHeaderColumn>
							<TableHeaderColumn>url</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} >
						{repos && repos.map( (repo, index) => (
							<TableRow key={index}>
								<TableRowColumn>{repo.name}</TableRowColumn>
								<TableRowColumn>{repo.primaryLanguage}</TableRowColumn>
								<TableRowColumn>{repo.hasWikiEnabled.toString()}</TableRowColumn>
								<TableRowColumn>{repo.updatedAt}</TableRowColumn>
								<TableRowColumn>{repo.createdAt}</TableRowColumn>
								<TableRowColumn><a href={repo.url}>{repo.url}</a></TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	}
}

//I wanted to have redux as a part of my application, without apollo completely controlling state change. 
//This is a somewhat customized solution, but it allows redux to maintain state change (i.e. filtering the table and handling <input/> state change 
//but also allows apollo-redux to maintain our data store coming back from graphql
export default connect((state) => (state))(compose(RepoList))