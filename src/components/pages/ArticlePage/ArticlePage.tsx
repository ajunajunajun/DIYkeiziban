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
 * 記事詳細表示のコンポーネント
 * @param props
 */
export default function Article({
  articles = articlesJson,
  ...props
}: Props & RouteProps) {
  const article = articles[parseInt(props.match.params.id)]
  return (
    <article className="c-article l-inner">
      <h1 className="c-article__title">{article.title}</h1>
      <h2>{article.id}</h2>
      <p className="c-article__text">{article.text}</p>
    </article>
  )
}
