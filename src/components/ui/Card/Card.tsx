import React, { useMemo } from 'react'
import { articleType } from '../../../domains/article'
import classnames from 'classnames'

import '../../../styles/components/_card.scss'
import { Link } from 'react-router-dom'

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
  const classname = useMemo(
    (): string => classnames('c-card', `c-card--${size}`),
    [size]
  )
  return (
    <Link to={`/articles/${article.id}`} className={classname}>
      <dl>
        <dt>
          <h2 className="c-card__title">{article.title}</h2>
        </dt>
        {article.id}
        <dd>
          <p className="c-card__text">{article.text}</p>
        </dd>
      </dl>
    </Link>
  )
}
