import React from 'react'
import Button from '../../ui/Button/Button'

import '../../../styles/main.scss'
import '../../../styles/projects/_home.scss'
import '../../../styles/components/_button.scss'

/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="c-home l-inner">
      <h1>DIY Keiziban</h1>
      <h2>DIYの掲示板だよ～～</h2>
      <h3>このさいとのもくてきとは～</h3>
      <Button as="button" size="small">
        small
      </Button>
      <Button as="button" size="medium">
        medium
      </Button>
      <Button as="button" size="large">
        large
      </Button>
    </div>
  )
}
