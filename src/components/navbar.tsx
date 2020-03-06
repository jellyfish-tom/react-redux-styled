import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Simple REST Client</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
