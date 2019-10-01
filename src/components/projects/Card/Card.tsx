import React, { useMemo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { articleType } from '../../../domains/article'
import Button from '../../ui/Button/Button'
import { useRootContext } from '../../../store/context/RootContext'

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
 * 記事の一覧表示用プロジェクト
 * @param props
 */
export default function Card({ article, size = 'medium' }: Props) {
  const { userdata, setUserdata } = useRootContext()

  const classname = useMemo(
    (): string => classnames('c-card', `c-card--${size}`),
    [size]
  )

  const [favorite, setfavorite] = useState<string>('')

  useEffect(() => {
    if (userdata.favorite.indexOf(article.id) !== -1) {
      setfavorite('c-button--favorited')
    } else {
      setfavorite('')
    }
    // todo return 新しい情報でdb更新
  }, [userdata.favorite, article.id])

  const Favorite = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    const existdata = userdata.favorite.indexOf(article.id)
    if (existdata !== -1) {
      userdata.favorite.splice(existdata, 1)
      setUserdata(state => ({
        ...state,
        favorite: [...state.favorite]
      }))
    } else {
      setUserdata(state => ({
        ...state,
        favorite: [...state.favorite, article.id]
      }))
    }
  }

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
        <Button
          as="button"
          size="small"
          onClick={Favorite}
          className={favorite}
        >
          <span role="img" aria-label="favorite">
            ⭐
          </span>
        </Button>
      </div>
    </Link>
  )
}
