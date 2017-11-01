import PropTypes from 'prop-types';
import React from 'react';

const RepoRow = ({ repo }) => (
  <tr>
    <td>{repo.name}</td>
    <td>{repo.stargazers.totalCount}</td>
    <td>{repo.watchers.totalCount}</td>
    <td>{repo.createdAt}</td>
  </tr>
);

export default RepoRow;

RepoRow.propTypes = {
  repo: PropTypes.object.isRequired
};
