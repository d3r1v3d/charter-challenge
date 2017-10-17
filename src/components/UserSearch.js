import React from 'react';
import {string, func} from 'prop-types';
import {compose, withState} from 'recompose';
import styles from './UserSearch.css';
import searchIcon from '../images/search.svg';

export const handleKeyDown = ({event, onSubmit, setValue, value}) => {
  if (event.keyCode === 13) {
    event.stopPropagation();
    event.preventDefault();
    onSubmit(value);
    setValue('');
  }
};

export const handleChange = ({event, setValue}) => {
  setValue(event.target.value.toLowerCase());
};

export const UserSearch = ({onSubmit, setValue, value}) => {
  return (
    <div>
      <img src={searchIcon} className={styles.searchIcon} alt="search" />
      <input
        type="text"
        value={value}
        onKeyDown={event => handleKeyDown({event, onSubmit, setValue, value})}
        onChange={event => handleChange({event, setValue})}
        placeholder="github username"
        autoFocus={true}
        className={styles.username}
      />
    </div>
  );
};

UserSearch.propTypes = {
  onSubmit: func.isRequired,
  setValue: func.isRequired,
  value: string.isRequired
};

export default compose(
  withState('value', 'setValue', '')
)(UserSearch);