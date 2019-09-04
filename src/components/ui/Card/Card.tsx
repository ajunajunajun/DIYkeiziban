import React from 'react'
import { articleType } from '../../../domains/article'
import '../../../styles/components/_card.scss'

/**
 * Card の Props
 */
type Props = {
  article: articleType
}

/**
 * 記事の一覧表示用のコンポーネント
 * @param props
 */
export default function Card({ article }: Props) {
  return (
    <dl className="c-card">
      <dt>
        <h2 className="c-card__title">{article.title}</h2>
      </dt>
      {article.id}
      <dd>
        <p className="c-card__text">{article.text}</p>
      </dd>
    </dl>
  )
}
