import React, {PropTypes} from 'react';

const RepoListRow = ({repo, user, avatarUrl, index}) => {
  const img = avatarUrl;

  const url = 'https://github.com/'+decodeURIComponent(repo.resourcePath);
  return (
    <div className={(index % 2 === 0 ? 'row align-items-center evenRow' : 'row align-items-center')}>
      <div className={(index % 2 === 0 ? 'col-md-6 order-2' : 'col-md-6')}>
        <div className="p-5">
          <img className="img-fluid rounded-circle" src={img} alt=""/>
        </div>
      </div>
      <div className={(index % 2 === 0 ? 'col-md-6 order-1' : 'col-md-6')}>
        <div className="p-5">
          <h2 className="display-4"><a href={url} target="_blank">{repo.name}</a></h2>
          <p>{repo.description}</p>
          <i className="fa fa-star" aria-hidden="true"> </i> {repo.stargazers.totalCount} | {user.login}

        </div>
      </div>
    </div>
  );
};

RepoListRow.propTypes = {

  repo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  //avatarUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default RepoListRow;
