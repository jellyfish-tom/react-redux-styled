import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import * as postsAPI from '../../api/posts';
import { Post } from '../../reducers/models';
import Routes from '../../api/routes';
import { setActivePost, SetActivePostType } from '../../actions/post-actions';

function PostsListItem(props: { post: Post; setActivePost: SetActivePostType }) {
  const { post, setActivePost } = props;
  const history = useHistory();

  const moveToDetails = () => {
    setActivePost(post);
    history.push(Routes.postDetails(post.id));
  };

  const removeElement = () => {
    if (post.id) {
      postsAPI.deletePost({ itemId: post.id });
    }
  };

  return (
    <li className="posts-list">
      <span>{post.title}</span>
      <button onClick={moveToDetails}>DETAILS</button>
      <button onClick={removeElement}>REMOVE</button>
    </li>
  );
}

export default connect(null, { setActivePost })(PostsListItem);
