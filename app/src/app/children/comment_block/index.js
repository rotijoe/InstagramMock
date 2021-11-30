import React from 'react';
import Comment from './children/Comment';
import styles from './styles';

const CommentBlock = (props) => {
  const { commentsData } = props;
  const comments = commentsData.edges.map((comment) => comment.node);
  return (
    <div style={styles}>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentBlock;
