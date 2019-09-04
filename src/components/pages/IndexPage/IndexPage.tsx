import React from 'react'
import { Link } from 'react-router-dom'

import '../../../styles/main.scss'
import '../../../styles/projects/_home.scss'
import Button from '../../ui/Button/Button'

/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="c-home l-inner">
      <h1>DIY Keiziban</h1>
      <h2>DIYの掲示板だよ～～</h2>
      <h3>このさいとのもくてきとは～</h3>
      <Button as={Link} size="medium" to="/article">
        article
      </Button>
    </div>
  )
}
