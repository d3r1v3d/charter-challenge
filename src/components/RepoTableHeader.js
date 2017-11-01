import PropTypes from 'prop-types';
import React from 'react';

const RepoTableHeader = ({ sort, onSortChange }) => {
  const getSortIcon = (field) => {
    if (sort.field !== field) {return '';}
    return sort.reverse ? 'arrow_drop_down' : 'arrow_drop_up';
  };

  return (
    <thead>
      <tr>
        <th onClick={ ()=>onSortChange('name') }>
          Name<i className="material-icons">{getSortIcon('name')}</i>
        </th>
        <th onClick={ ()=>onSortChange('stargazers.totalCount') }>
          Stars<i className="material-icons">{getSortIcon('stargazers.totalCount')}</i>
        </th>
        <th onClick={ ()=>onSortChange('watchers.totalCount') }>
          Watchers<i className="material-icons">{getSortIcon('watchers.totalCount')}</i>
        </th>
        <th onClick={ ()=>onSortChange('createdAt') }>
          Created<i className="material-icons">{getSortIcon('createdAt')}</i>
        </th>
      </tr>
    </thead>
  )
}

export default RepoTableHeader;

RepoTableHeader.propTypes = {
  sort: PropTypes.object.isRequired,
  onSortChange: PropTypes.func.isRequired
};
