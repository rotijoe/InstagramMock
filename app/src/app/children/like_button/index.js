import React, { useState } from 'react';
import LikedIcon from './children/liked_icon';
import UnlikedIcon from './children/unliked_icon';

const LikeButton = (props) => {
  const { sizePx } = props;
  const [liked, setLiked] = useState(false);
  return (
    <div onClick={() => setLiked(!liked)} style={{ cursor: 'pointer' }}>
      {liked ? <LikedIcon sizePx={sizePx} /> : <UnlikedIcon sizePx={sizePx} />}
    </div>
  );
};

export default LikeButton;
