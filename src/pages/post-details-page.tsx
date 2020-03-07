import { connect, useSelector } from 'react-redux';
import React from 'react';

import { StoreState } from '../reducers/root-reducer';
import { Post } from '../reducers/models';
import { updatePost, UpdatePostType } from '../actions/post-action';
import PostDetails from '../components/posts/post-details';
// import PostNew from '../components/posts/post-new';

function PostDetailsPage(props: { updatePost: UpdatePostType }) {
  const post: Post = useSelector((state: StoreState) => state.posts.activePost as Post);

  const { updatePost } = props;

  const onPostPropertyUpdate = (post: Post) => {
    updatePost(post);
  };

  // return post ? <PostDetails /> : <PostNew />;
  return post && <PostDetails post={post} onPostPropertyUpdate={onPostPropertyUpdate} />;
}

export default connect(null, { updatePost })(PostDetailsPage);
