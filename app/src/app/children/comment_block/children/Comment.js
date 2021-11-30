import React from 'react';
import LikeButton from '../../like_button';
import styles from '../styles';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div style={styles.comment}>
      <p style={styles.comment.text}>
        <span style={styles.comment.text.user}>{comment.owner.username}</span>
        {comment.text}
      </p>
      <LikeButton sizePx="12" />
    </div>
  );
};

export default Comment;
