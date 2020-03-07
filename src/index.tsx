import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { AppNavbar } from './components/navbar';
import Home from './pages/home';
import Posts from './pages/posts';
import PostDetails from './pages/post-details';
import Routes from './api/routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route exact path={Routes.home}>
          <Home />
        </Route>
        <Route exact path={Routes.posts}>
          <Posts />
        </Route>
        <Route exact path={Routes.postDetails()}>
          <PostDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
