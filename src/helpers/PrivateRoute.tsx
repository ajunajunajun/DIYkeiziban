import React from 'react'
import { useRootContext } from '../store/context/RootContext'
import { Redirect } from 'react-router-dom'

/**
 * react-router-dom の Route の Props
 */
type Props = {
  redirect: string
  children: React.ReactNode
}

/**
 * ログイン時のルート
 */
export default function PrivateRoute({ redirect, children }: Props) {
  const { isAuthenticated } = useRootContext()
  return (
    <div className="PrivateRoute">
      {isAuthenticated ? [children] : <Redirect to={redirect} />}
    </div>
  )
}
