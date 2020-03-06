import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

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

  return (
    <li className="posts-list" onClick={moveToDetails}>
      <span>{post.title}</span>
    </li>
  );
}

export default connect(null, { setActivePost })(PostsListItem);
