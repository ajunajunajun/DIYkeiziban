import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AppHeader from './projects/AppHeader/AppHeader'
import IndexPage from './pages/IndexPage/IndexPage'
import ArticleListPage from './pages/ArticleListPage/ArticleListPage'
import SideBar from './projects/SideBar/SideBar'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import { RootProvider } from '../store/context/RootContext'
import NonPrivateRoute from '../helpers/NonPrivateRoute'
import LoginPage from './pages/LoginPage/LoginPage'
import PrivateRoute from '../helpers/PrivateRoute'

import '../styles/main.scss'

export default () => (
  <RootProvider>
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <NonPrivateRoute
          redirect="/articles"
          path="/"
          exact={true}
          component={IndexPage}
        />
        <NonPrivateRoute
          redirect="/articles"
          path="/login"
          exact={true}
          component={LoginPage}
        />
        <PrivateRoute redirect="/">
          <SideBar />
          <Switch>
            <Route path="/articles" exact={true} component={ArticleListPage} />
            <Route path="/articles/:id" exact={true} component={ArticlePage} />
          </Switch>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  </RootProvider>
)
