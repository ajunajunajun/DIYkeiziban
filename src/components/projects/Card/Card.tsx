import React, { useMemo } from 'react'
import { articleType } from '../../../domains/article'
import classnames from 'classnames'

import '../../../styles/components/_card.scss'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'

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
        <dd>
          {article.name}
          <div className="c-card__thumbnail">
            <img src={article.thumbnail} alt="" />
          </div>
          <div className="c-card__text">
            <p>{article.text}</p>
          </div>
        </dd>
      </dl>
      <div className="c-card__button">
        <Button as="button" size="small">
          <span role="img" aria-label="like">
            💕
          </span>
        </Button>
        <Button as="button" size="small">
          <span role="img" aria-label="favorite">
            ⭐
          </span>
        </Button>
      </div>
    </Link>
  )
}
