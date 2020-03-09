import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { AppNavbar } from './components/navbar';
import HomePage from './pages/home-page';
import PostsPage from './pages/posts-page';
import PostDetailsPage from './pages/post-details-page';
import Routes from './api/routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 20px;
    margin: 0;
  }

  .page {
    padding: 20px 0;
  }
`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <GlobalStyle />
      <AppNavbar />
      <Switch>
        <Route exact path={Routes.home}>
          <HomePage />
        </Route>
        <Route exact path={Routes.posts}>
          <PostsPage />
        </Route>
        <Route exact path={Routes.postDetails()}>
          <PostDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
