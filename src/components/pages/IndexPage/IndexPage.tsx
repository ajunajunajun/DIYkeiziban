import React from 'react'

import '../../../styles/main.scss'
import '../../../styles/projects/_home.scss'
import Button from '../../ui/Button/Button'

export default function IndexPage() {
  return (
    <div className="c-home l-inner">
      <h1>DIY Keiziban</h1>
      <h2>DIYの掲示板だよ～～</h2>
      <h3>このさいとのもくてきとは～</h3>
      <Button size="medium">ログイン</Button>
    </div>
  )
}
