import React from 'react';
import {number, string, shape} from 'prop-types';
import styles from './GithubRepo.css';

const formatDateString = dateString => new Date(dateString).toLocaleDateString();

const GithubRepo = ({name, createdAt, description, url, stargazers}) => {
  return (
    <div className={styles.repo}>
      <div className={styles.name}>{name}</div>
      <div className={styles.small}>Created on {formatDateString(createdAt)}</div>
      <div className={styles.small}><a href={url} target="_blank">{url}</a></div>
      <div className={styles.small}>Starred by {stargazers.totalCount} people</div>
      {description ? <p>{description}</p> : null}
    </div>
  );
};

GithubRepo.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  createdAt: string.isRequired,
  url: string.isRequired,
  description: string,
  stargazers: shape({
    totalCount: number.isRequired
  }).isRequired
};

export default GithubRepo;