import React from 'react';
import { Link } from 'react-router-dom';

export function AppNavbar() {
  return (
    <div>
      <Link to="/">Simple REST Client</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
