import React from 'react';
import Comment from '../comment_block/children/Comment';
import styles from './styles';

const UserBlock = (props) => {
  const { owner, location, caption } = props;
  return (
    <div style={styles.userBlock}>
      <div style={styles.header}>
        <img style={styles.logo} src={owner.profile_pic_url} />
        <div style={styles.text}>
          <p style={styles.username}>{owner.username}</p>
          <p style={styles.location}>{location.name}</p>
        </div>
      </div>
      <div style={styles.caption}>
        <Comment comment={caption} username={owner.username} />
      </div>
    </div>
  );
};

export default UserBlock;
