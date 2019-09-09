import React from 'react'
import { useRootContext } from '../store/context/RootContext'
import { Route, Redirect } from 'react-router-dom'

/**
 * react-router-dom の Route の Props
 * todo
 */
type Props = {
  redirect: string
}

/**
 * 未ログイン時のルート
 */
export default function NonPrivateRoute({ redirect, ...props }: Props & any) {
  const { isAuthenticated } = useRootContext()
  return (
    <div className="NonPrivateRoute">
      {isAuthenticated ? (
        <Redirect to={redirect} />
      ) : (
        <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
      )}
    </div>
  )
}
