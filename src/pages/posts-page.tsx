import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as postsAPI from '../api/posts';
import Routes from '../api/routes';
import {
  fetchPostsError,
  fetchPostsPending,
  fetchPostsSuccess,
  FetchPostsPendingType,
  FetchPostsSuccessType,
} from '../actions/posts-actions';
import { setActivePost, SetActivePostType } from '../actions/post-actions';
import { ErrorType } from '../actions/generics';
import { StoreState } from '../reducers/root-reducer';
import PostsList from '../components/posts/posts-list';
import { Post } from '../reducers/models';

function PostsPage(props: {
  fetchPostsPending: FetchPostsPendingType;
  fetchPostsSuccess: FetchPostsSuccessType;
  fetchPostsError: ErrorType;
  setActivePost: SetActivePostType;
}) {
  const data = useSelector((state: StoreState) => state.posts.data); // TODO: active post dekonstrukcja
  const { fetchPostsPending, fetchPostsSuccess, fetchPostsError, setActivePost } = props;
  const history = useHistory();

  useEffect(() => {
    postsAPI.getPosts({
      begin: fetchPostsPending,
      success: fetchPostsSuccess,
      error: fetchPostsError,
    });
  }); // eslint-disable-line react-hooks/exhaustive-deps

  const createNewPost = () => {
    setActivePost({} as Post);
    history.push(Routes.postDetails('new'));
  };

  return (
    <div className="posts-list">
      <button onClick={createNewPost}>CREATE POST</button>
      <PostsList posts={data} />
    </div>
  );
}

export default connect(null, {
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsError,
  setActivePost,
})(PostsPage);
