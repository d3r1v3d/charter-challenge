import PropTypes from 'prop-types';
import React, { Component } from 'react';
import RepoTableHeader from './RepoTableHeader';
import RepoRow from './RepoRow';
import { sortObjectArray } from '../helpers';

/*
  I would normally keep this stateless and handle sort and search via redux.

  Though it appears to be possible and best done though apollo's internal redux,
  my initial attempts to do so have failed and I do not have the time to work though it.
*/

export default class RepoTable extends Component {
  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
    this.state = {
      repos: this.props.repos,
      sort: {field: '', reverse: false}
    }
  };

  getSortReverse(field) {
    if (!this.state.sort.field === field) {return false;}
    return !this.state.sort.reverse;
  };

  onSortChange(field) {
    const reverse = this.getSortReverse(field);
    const repos = sortObjectArray(this.props.repos, field, reverse);
    this.setState({ repos, sort: { field, reverse } });
  };

  render() {
    const rows = this.state.repos.map((r => <RepoRow key={r.id} repo={r} />));
    return (
      <table>
        <RepoTableHeader sort={this.state.sort} onSortChange={this.onSortChange} />
        <tbody>{rows}</tbody>
      </table>
    )
  };
};

RepoTable.propTypes = {
  repos: PropTypes.array.isRequired
};
