import { connect, useSelector } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FireworkSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

import { ErrorType } from '../actions/generics';
import { StoreState } from '../reducers/root-reducer';
import { PostState } from '../reducers/post-reducer';
import { Post } from '../reducers/models';
import {
  onPostActionError,
  onPostActionPending,
  OnPostActionPendingType,
  setActivePost,
  updatePost,
  UpdatePostType,
} from '../actions/post-actions';
import * as postsAPI from '../api/posts';
import Routes from '../api/routes';
import StyledButton from '../components/button';
import colors from '../components/colors';

const StyledInput = styled.input`
  font-size: 12px;
  text-decoration: none;
  padding: 3px 5px;
  border: 2px solid #007bff;
  display: inline-block;
  margin-right: 10px;
`;

const StyledLabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  justify-content: space-between;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    align-self: flex-end;
  }
`;

function PostDetailsPage(props: {
  updatePost: UpdatePostType;
  onPostActionError: ErrorType;
  onPostActionPending: OnPostActionPendingType;
}) {
  const { data, loading } = useSelector((state: StoreState) => state.activePost as PostState);
  const history = useHistory();

  const { updatePost, onPostActionPending, onPostActionError } = props;

  const onTitleChange = (event: any) => {
    updatePost({ ...data, title: event.target.value });
  };

  const onBodyChange = (event: any) => {
    updatePost({ ...data, body: event.target.value });
  };

  const saveChanges = () => {
    if (data.id) {
      postsAPI.updatePost({ itemId: data.id, payload: data });
      history.push(Routes.posts);
    } else {
      postsAPI.createPost({
        payload: data,
        begin: onPostActionPending,
        success: () => {
          setActivePost({} as Post);
          history.push(Routes.posts);
        },
        error: onPostActionError,
      });
    }
  };

  return (
    <div className="page post-details">
      {loading ? (
        <FireworkSpinner size={30} color={colors.blue} loading={loading} />
      ) : (
        <StyledFormContainer>
          <StyledLabeledInput>
            <span>Post Title</span>
            <StyledInput onChange={onTitleChange} value={data.title || ''} />
          </StyledLabeledInput>
          <StyledLabeledInput>
            <span>Post Body</span>
            <StyledInput onChange={onBodyChange} value={data.body || ''} />
          </StyledLabeledInput>
          <StyledButton color={data.id ? colors.yellow : colors.green} clickHandler={saveChanges}>
            {data.id ? 'UPDATE' : 'CREATE'}
          </StyledButton>
        </StyledFormContainer>
      )}
    </div>
  );
}

export default connect(null, { updatePost, onPostActionPending, onPostActionError })(PostDetailsPage);
