import React from 'react'
import { articleType } from '../../../domains/article'
import { useArticlesContent } from '../../../store/context/ArticlesContext'

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
  const state = useArticlesContent()
  return (
    <dl className="c-card" onClick={() => state.setState(article.id)}>
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
