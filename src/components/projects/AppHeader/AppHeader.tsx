import React from 'react'
import Button from '../../ui/Button/Button'
import { Link } from 'react-router-dom'

import '../../../styles/projects/_header.scss'
import { useRootContext } from '../../../store/context/RootContext'

/**
 * アプリのヘッダー用プロジェクト
 */
export default function AppHeader() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const Logout = () => {
    setAuthenticate(!isAuthenticated)
  }

  return (
    <header className="c-header">
      <div className="c-header-inner">
        <Button as={Link} to="/">
          Home
        </Button>
        {isAuthenticated ? (
          <Button onClick={Logout}>Logout</Button>
        ) : (
          <Button as={Link} to="/login">
            Login
          </Button>
        )}
      </div>
    </header>
  )
}
