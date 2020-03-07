import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import * as postsAPI from '../api/posts';
import {
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsError,
  FetchPostsPendingType,
  FetchPostsSuccessType,
} from '../actions/post-action';
import { FetchErrorType } from '../actions/generics';
import { StoreState } from '../reducers/root-reducer';
import PostsList from '../components/posts/posts-list';

function Posts(props: {
  fetchPostsPending: FetchPostsPendingType;
  fetchPostsSuccess: FetchPostsSuccessType;
  fetchPostsError: FetchErrorType;
}) {
  const data = useSelector((state: StoreState) => state.posts.data); // TODO: active post dekonstrukcja

  useEffect(() => {
    postsAPI.getPosts({
      begin: props.fetchPostsPending,
      success: props.fetchPostsSuccess,
      error: props.fetchPostsError,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="posts-list">
      <PostsList posts={data} />
    </div>
  );
}

export default connect(null, {
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsError,
})(Posts);
