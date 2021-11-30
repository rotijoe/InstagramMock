import React from 'react';
import Comment from './children/Comment';
import styles from './styles';

const CommentBlock = (props) => {
  const { commentsData } = props;
  const comments = commentsData.edges.map((comment) => comment.node);
  return (
    <div style={styles.commentBlock}>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.username} />
      ))}
    </div>
  );
};

export default CommentBlock;
