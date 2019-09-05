import React from 'react'
import CardGroup from '../../ui/CardGroup/CardGroup'
import { articleType } from '../../../domains/article'
import { useArticlesContent } from '../../../store/context/ArticlesContext'

import '../../../styles/main.scss'
import '../../../styles/projects/_home.scss'

import { articles as articlesJson } from '../../../fixtures/articles.json'
import Article from '../../projects/Article/Article'

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
  const state = useArticlesContent()
  return (
    <div className="c-home l-inner">
      {state.state !== -1 ? (
        <Article article={articles[state.state]} />
      ) : (
        <CardGroup articles={articles} />
      )}
    </div>
  )
}
