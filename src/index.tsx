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

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
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
