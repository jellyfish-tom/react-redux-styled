import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import * as postsAPI from '../api/posts';
import {
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsError,
} from '../actions/post-action';
import { StoreState } from '../reducers/root-reducer';
import PostsList from '../components/posts/posts-list';

function Posts(props: {
  fetchPostsPending: any;
  fetchPostsSuccess: any;
  fetchPostsError: any;
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
