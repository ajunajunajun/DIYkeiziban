import React from 'react'
import { articleType } from '../../../domains/article'

import '../../../styles/projects/_article.scss'

/**
 * Article の Props
 */
type Props = {
  article: articleType
}

/**
 * 記事の一覧表示用のコンポーネント
 * @param props
 */
export default function Article({ article }: Props) {
  return (
    <article className="c-article">
      <h1 className="c-article__title">{article.title}</h1>
      <h2>{article.id}</h2>
      <p className="c-article__text">{article.text}</p>
    </article>
  )
}
