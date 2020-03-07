import { useSelector } from 'react-redux';
import React from 'react';
// import { connect } from 'react-redux';

// import * as postsAPI from '../api/posts';
import { StoreState } from '../reducers/root-reducer';
import { NullablePost } from '../reducers/models';

function PostDetails() {
  const post: NullablePost = useSelector(
    (state: StoreState) => state.posts.activePost, // TODO: active post dekonstrukcja
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
