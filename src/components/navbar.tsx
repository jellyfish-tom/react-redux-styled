import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 10px;
  font-size: 18px;
  display: inline-block;

  &:hover {
    text-decoration: none;
  }

  &.active {
    color: #007bff;
  }
`;

export function AppNavbar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/posts">Posts</StyledLink>
    </div>
  );
}
