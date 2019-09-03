import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import '../styles/main.scss'
import AppHeader from './projects/AppHeader/AppHeader'
import IndexPage from './pages/IndexPage/IndexPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'

export default () => (
  <BrowserRouter>
    <AppHeader />
    <Switch>
      <Route path="/" exact={true} component={IndexPage} />
      <Route path="/article" exact={true} component={ArticlePage} />
    </Switch>
  </BrowserRouter>
)
