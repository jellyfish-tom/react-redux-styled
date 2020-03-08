import React from 'react';
import { Link } from 'react-router-dom';

export function AppNavbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
