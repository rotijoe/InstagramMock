import React from 'react';
import CommentBlock from './children/comment_block';
import Image from './children/image';
import LikeBlock from './children/like_block';
import UserBlock from './children/user_block';
import styles from './styles';

const App = (props) => {
  const { data } = props;
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock
          owner={data.owner}
          location={data.location}
          caption={data.edge_media_to_caption.edges[0].node}
        />
        <CommentBlock commentsData={data.edge_media_to_comment} />
        <LikeBlock
          likeCount={data.edge_media_preview_like.count}
          dateCode={data.taken_at_timestamp}
        />
      </div>
    </main>
  );
};

export default App;
