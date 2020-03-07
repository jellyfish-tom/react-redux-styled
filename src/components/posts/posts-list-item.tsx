import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import * as postsAPI from '../../api/posts';
import { Post } from '../../reducers/models';
import Routes from '../../api/routes';
import { setActivePost } from '../../actions/post-action';

function PostsListItem(props: { post: Post; setActivePost: any }) {
  const { post, setActivePost } = props;
  const history = useHistory();

  const moveToDetails = () => {
    setActivePost(post);
    history.push(Routes.postDetails(post.id));
  };

  const removeElement = (e: any) => {
    postsAPI.deletePost({ itemId: post.id });

    e.stopPropagation();
  };

  return (
    <li className="posts-list" onClick={moveToDetails}>
      <span>{post.title}</span>
      <button onClick={removeElement}>REMOVE</button>
    </li>
  );
}

export default connect(null, { setActivePost })(PostsListItem);
