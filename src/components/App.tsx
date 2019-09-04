import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AppHeader from './projects/AppHeader/AppHeader'
import IndexPage from './pages/IndexPage/IndexPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import SideBar from './projects/SideBar/SideBar'

import '../styles/main.scss'

export default () => (
  <BrowserRouter>
    <AppHeader />
    <SideBar />
    <Switch>
      <Route path="/" exact={true} component={IndexPage} />
      <Route path="/articles" exact={true} component={ArticlePage} />
    </Switch>
  </BrowserRouter>
)
