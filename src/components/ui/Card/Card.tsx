import React, { useMemo } from 'react'
import { articleType } from '../../../domains/article'
import { useArticlesContent } from '../../../store/context/ArticlesContext'
import classnames from 'classnames'

import '../../../styles/components/_card.scss'

/**
 * Card の Props
 */
type Props = {
  /** カードの記事 */
  article: articleType

  /** カードのサイズ */
  size?: 'small' | 'medium' | 'large'
}

/**
 * 記事の一覧表示用のコンポーネント
 * @param props
 */
export default function Card({ article, size = 'medium' }: Props) {
  const state = useArticlesContent()
  const classname = useMemo(
    (): string => classnames('c-card', `c-card--${size}`),
    [size]
  )
  return (
    <dl className={classname} onClick={() => state.setState(article.id)}>
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
