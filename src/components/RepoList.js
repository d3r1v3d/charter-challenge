
import PropTypes from 'prop-types';
import React from 'react';
import RepoListRow from './RepoListRow';

let repoRow = []
const RepoList = ({ loading, user, loadMoreEntries }) => (

  <section>
    <div className="container">

    { user.repositories.edges.map((repo, index) => (
        <RepoListRow key={index} repo={repo.node} user={user} avatarUrl={user.avatarUrl} index={index} />
      ))}

      {(user.repositories.pageInfo.hasNextPage === true ?
        <div className="row" style={{"padding":"30px"}}>
          <div className="col-lg-1" style={{"float": "none","margin": "0 auto"}}><button style={{"width": "120px"}} onClick={loadMoreEntries}>Load more ({user.repositories.edges.length} of {user.repositories.totalCount})</button></div></div> : '')
      }
    </div>
  </section>
);

RepoList.propTypes = {
  user: PropTypes.object.isRequired,
  loadMoreEntries: PropTypes.func.isRequired
};

export default RepoList;
