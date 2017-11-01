//@flow
import React from 'react';

const styles = {
  userContainer: {
    width: '10%',
    minWidth: '200px',
    backgroundColor: '#222',
    color: 'white',
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 20,
  },
  userName: {
    fontSize: 40,
  },
}

const UserColumn = (
  {
    user,
    reposLength,
  } : {
    user: String,
    reposLength: Number,
  }
) => (
  <div style={styles.userContainer}>
      <span style={styles.userName}>
        {user}
      </span>
      <span style={{fontSize: 15, paddingLeft: 5}}>
        ({reposLength})
      </span>
  </div>
)

export default UserColumn;
