//@flow
import React from 'react';
import github from '../assets/github1600.png';
import UserColumn from './UserColumn';

const styles = {
  repoContainer: {
    display: 'flex',
  },
  repoList: {
    flex: 2,
    margin: 0,
    padding: 0,
  },
  listStyle: {
    listStyleType: 'none',
  },
  listImg: {
    justifyContent: 'flex-start',
    marginRight: 15,
    opacity: '.8',

  },
  listItem: {
    display: 'flex',
    padding: 10,
    overflow: 'auto',
    alignItems: 'center',
    fontSize: 28,
    textAlign: 'left',
    borderBottom: '2px solid #ccc',
  },
  description: {
    fontSize: 12,
    paddingTop: 4,
  },
  repoInfo: {
    display: 'flex',
    flexDirection: 'column',
  }
}

const RepoList = (
  { user,
    repos,
  } : {
    user: String,
    repos: Array,
  }
) => (
  <div style={styles.repoContainer}>
    <UserColumn
      user={user}
      reposLength={repos.length}
      />
    <div style={styles.repoList}>
      <ul style={styles.listStyle}>
        {repos && repos.map((repo, index) => (
          <li
            key={index}
            style={styles.listItem}
            >
            <img
              src={github}
              width={80}
              height={80}
              style={styles.listImg}
              />
            <div style={styles.repoInfo}>
              <div>{repo.name}</div>
              <div style={styles.description}>
                {repo.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default RepoList;
