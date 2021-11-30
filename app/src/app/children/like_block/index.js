import React from 'react';
import LikeButton from '../like_button';
import styles from './styles';

const LikeBlock = (props) => {
  const { dateCode, likeCount } = props;
  const secsInDay = 60 * 60 * 24;
  const nowSecs = Date.now() / 1000;
  let date = Math.floor((nowSecs - dateCode) / secsInDay);

  if (date > 365) {
    date = <>{Math.floor((nowSecs - dateCode) / secsInDay / 365)} years ago</>;
  } else if (date > 30) {
    date = <>{Math.floor((nowSecs - dateCode) / secsInDay / 30)} months ago</>;
  } else if (date > 7) {
    date = <>{Math.floor((nowSecs - dateCode) / secsInDay / 7)} weeks ago</>;
  }

  return (
    <div style={styles}>
      <div>
        <h4 style={styles.likes}>{likeCount.toLocaleString()} likes</h4>
        <p style={styles.date}>{date}</p>
      </div>
      <LikeButton sizePx="24" />
    </div>
  );
};

export default LikeBlock;
