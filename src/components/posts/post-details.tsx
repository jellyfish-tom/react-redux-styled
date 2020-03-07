import React from 'react';

import * as postsAPI from '../../api/posts';
import { Post } from '../../reducers/models';

function PostDetails(props: { post: Post; onPostPropertyUpdate: (post: Post) => void }) {
  const { post, onPostPropertyUpdate } = props;

  const updatePost = () => {
    postsAPI.updatePost({ itemId: post.id, payload: post });
  };

  const onTitleChange = (event: any) => {
    onPostPropertyUpdate({ ...post, title: event.target.value });
  };

  const onBodyChange = (event: any) => {
    onPostPropertyUpdate({ ...post, body: event.target.value });
  };

  return (
    <div className="post-details">
      <input onChange={onTitleChange} value={post.title} />
      <input onChange={onBodyChange} value={post.body} />
      <button onClick={updatePost}>UPDATE</button>
    </div>
  );
}

export default PostDetails;
