import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as postsAPI from '../../api/posts';
import { Post } from '../../reducers/models';
import Routes from '../../api/routes';
import { setActivePost, SetActivePostType } from '../../actions/post-actions';
import StyledButton from '../../components/button';

import colors from '../colors';

const StyledListElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  button {
    margin-left: 5px;
  }
`;

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
    <StyledListElement>
      <span>{post.title}</span>
      <div>
        <StyledButton color={colors.yellow} clickHandler={moveToDetails}>
          DETAILS
        </StyledButton>
        <StyledButton color={colors.red} clickHandler={removeElement}>
          REMOVE
        </StyledButton>
      </div>
    </StyledListElement>
  );
}

export default connect(null, { setActivePost })(PostsListItem);
