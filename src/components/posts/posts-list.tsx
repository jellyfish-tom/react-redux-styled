import React from 'react';

import { Post } from '../../reducers/models';
import PostListItem from './posts-list-item';

function PostsList(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <div className="posts-list">
      <h1>POSTS LIST</h1>
      <ul>
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
