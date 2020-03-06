import { useSelector } from 'react-redux';
import React from 'react';
// import { connect } from 'react-redux';

// import * as postsAPI from '../api/posts';
import { StoreState } from '../reducers/root-reducer';
import { Post } from '../reducers/models';

function PostDetails() {
  const post: Post | null = useSelector(
    (state: StoreState) => state.posts.activePost,
  );

  return (
    post && (
      <div className="post-details">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  );
}

export default PostDetails;
