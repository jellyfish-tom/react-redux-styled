import React from 'react';
import styled from 'styled-components';

import { Post } from '../../reducers/models';
import PostListItem from './posts-list-item';
import StyledButton from '../button';

import colors from '../colors';

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  & > h3 {
    margin: 0;
    padding: 0;
  }
`;

const StyledPostsList = styled.div`
  width: 800px;
`;

const StyledOrderedList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;

function PostsList(props: { posts: Post[]; onCreateNewPostClick: any }) {
  const { posts, onCreateNewPostClick } = props;

  return (
    <StyledPostsList>
      <StyledHeaderContainer>
        <h3>Posts List</h3>
        <StyledButton color={colors.green} clickHandler={onCreateNewPostClick}>
          CREATE POST
        </StyledButton>
      </StyledHeaderContainer>
      <StyledOrderedList>
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </StyledOrderedList>
    </StyledPostsList>
  );
}

export default PostsList;
