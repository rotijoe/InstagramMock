import React from 'react';
import styles from './styles';

const UserBlock = (props) => {
  const { owner, location } = props;
  return (
    <div style={styles}>
      <img style={styles.logo} src={owner.profile_pic_url} />
      <div style={styles.text}>
        <p style={styles.username}>{owner.username}</p>
        <p style={styles.location}>{location.name}</p>
      </div>
    </div>
  );
};

export default UserBlock;
