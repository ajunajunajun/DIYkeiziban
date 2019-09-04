import React from 'react'
import CardGroup from '../../ui/CardGroup/CardGroup'
import { articleType } from '../../../domains/article'

import '../../../styles/main.scss'
import '../../../styles/projects/_home.scss'

import { articles as articlesJson } from '../../../fixtures/articles.json'

/**
 * ArticlePage の Props
 */
type Props = {
  articles: articleType[]
}

/**
 * 記事一覧を表示するページ
 */
export default function ArticlePage({ articles = articlesJson }: Props) {
  return (
    <div className="c-home l-inner">
      <h1>きじいちらん</h1>
      <CardGroup articles={articles} />
    </div>
  )
}
