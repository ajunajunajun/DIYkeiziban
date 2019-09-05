import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AppHeader from './projects/AppHeader/AppHeader'
import IndexPage from './pages/IndexPage/IndexPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import SideBar from './projects/SideBar/SideBar'

import '../styles/main.scss'
import { ArticlesProvider } from '../store/context/ArticlesContext'

export default () => (
  <BrowserRouter>
    <AppHeader />
    <SideBar />
    <Switch>
      <Route path="/" exact={true} component={IndexPage} />
      <ArticlesProvider>
        <Route path="/articles" exact={true} component={ArticlePage} />
      </ArticlesProvider>
    </Switch>
  </BrowserRouter>
)
