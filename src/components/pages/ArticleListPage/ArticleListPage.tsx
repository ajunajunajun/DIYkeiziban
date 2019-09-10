import React, { useEffect } from 'react'
import CardGroup from '../../projects/CardGroup/CardGroup'
import { articleType } from '../../../domains/article'
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
export default function ArticleListPage() {
  const articles = articlesJson

  return (
    <div className="l-inner">
      <CardGroup articles={articles} />
    </div>
  )
}
