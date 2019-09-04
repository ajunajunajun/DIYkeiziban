import React from 'react'
import Button from '../../ui/Button/Button'
import { Link } from 'react-router-dom'

import '../../../styles/projects/_header.scss'

/**
 * アプリのヘッダー
 */
export default function AppHeader() {
  return (
    <header className="c-header">
      <div className="c-header-inner">
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/articles">
          articles
        </Button>
      </div>
    </header>
  )
}
