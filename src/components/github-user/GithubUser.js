import React from 'react';
import {arrayOf, func, number, string, shape} from 'prop-types';
import styles from './GithubUser.css';
import githubIcon from '../../images/github.svg';
import GithubRepo from '../github-repo/GithubRepo';

const formatDateString = dateString => new Date(dateString).toLocaleDateString();

const GithubUser = ({repoCount, setRepoCount, user: {name, login, bio, location, createdAt, websiteUrl, avatarUrl, repositories: {nodes: repos, totalCount: totalRepos}}}) => {
  return (
    <div>
      <div className={styles.userInfo}>
        <h1 className={styles.name}>{name}</h1>
        <p><img className={styles.githubIcon} src={githubIcon} alt="github"/> {login}</p>
        <p>Member since {formatDateString(createdAt)}</p>
        {location ? <p>{location}</p> : null}
        {websiteUrl ? <p><a href={websiteUrl} target="_blank">{websiteUrl}</a></p> : null}
        {bio ? <p>{bio}</p> : null}
        <img src={avatarUrl} alt={`${login} avatar`} className={styles.avatar}/>
      </div>

      <div className={styles.repoList}>
        <div>
          Showing
          &nbsp;
          <select value={repoCount} onChange={e => setRepoCount(parseInt(e.target.value, 10))}>
            <option value="5">5</option>
            <option value="25">25</option>
            <option value="50">{Math.min(50, totalRepos)}</option>
          </select>
          &nbsp;
          of {totalRepos}
        </div>
        {repos.map(repo => <GithubRepo key={repo.id} {...repo}/>)}
      </div>
    </div>
  )
};

GithubUser.propTypes = {
  repoCount: number.isRequired,
  setRepoCount: func.isRequired,
  user: shape({
    login: string.isRequired,
    name: string.isRequired,
    createdAt: string.isRequired,
    avatarUrl: string.isRequired,
    websiteUrl: string,
    location: string,
    bio: string,
    repositories: shape({
      totalCount: number.isRequired,
      nodes: arrayOf(shape(GithubRepo.propTypes)).isRequired
    }).isRequired
  }).isRequired
};

export default GithubUser;