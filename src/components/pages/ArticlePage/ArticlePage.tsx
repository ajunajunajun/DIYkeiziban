import React from 'react'
import { articleType } from '../../../domains/article'
import { articles as articlesJson } from '../../../fixtures/articles.json'

import '../../../styles/projects/_article.scss'
import { RouteComponentProps } from 'react-router-dom'

/**
 * Article の Props
 */
type Props = {
  articles: articleType[]
}

/**
 * react-router-dom の Route の Props
 */
type RouteProps = RouteComponentProps<{ id: string }>

/**
 * 記事詳細表示のページ
 * @param props
 */
export default function Article({
  articles = articlesJson,
  ...props
}: Props & RouteProps) {
  const article = articles[parseInt(props.match.params.id)]
  return (
    <article className="l-inner">
      <h1>{article.title}</h1>
      <h2>{article.name}</h2>
      <p>{article.text}</p>
    </article>
  )
}
