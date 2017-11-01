import PropTypes from 'prop-types';
import React from 'react';
import RepoTable from './RepoTable';

const RepoList = ({ user, repos }) => (
  <main className="wrapper">
    <section className="container">
    <p>
      <b>User:</b> {user}
    </p>
    <RepoTable repos={repos} />
    </section>
  </main>
);


RepoList.propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

export default RepoList;
