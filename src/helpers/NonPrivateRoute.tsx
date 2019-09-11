import React from 'react'
import { useRootContext } from '../store/context/RootContext'
import { Route, Redirect, RouteProps } from 'react-router-dom'

/**
 * react-router-dom の Route の Props
 */
type Props = {
  redirect: string
}

/**
 * 未ログイン時のルート
 */
export default function NonPrivateRoute({
  redirect,
  ...props
}: Props & RouteProps) {
  const { isAuthenticated } = useRootContext()
  return (
    <>
      {isAuthenticated ? (
        <Redirect to={redirect} />
      ) : (
        <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
      )}
    </>
  )
}
